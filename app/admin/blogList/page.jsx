
"use client";

import BlogTable from "@/Components/AdminComponents/BlogTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BlogList = () => {
  const [blogList, setBlogList] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogList(response.data.blogs);
  };

  const deleteBlog = async (mongoId) => {
    await axios.delete(`/api/blog?id=${mongoId}`);
    toast.success("Deleted successfully");
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">All Blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto border border-gray-200 rounded-xl bg-white/30 shadow-sm">
        <table className="w-full text-gray-700">
          <thead className="bg-white/50 text-left text-gray-600 uppercase text-sm">
            <tr>
              <th className="hidden sm:block px-6 py-3">Author Name</th>
              <th className="px-6 py-3">Blog Title</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogList.map((blog) => (
              <BlogTable
                key={blog._id}
                title={blog.title}
                authorImg={blog.authorImg}
                mongoId={blog._id}
                deleteBlog={deleteBlog}
                author={blog.author}
                date={blog.date}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
