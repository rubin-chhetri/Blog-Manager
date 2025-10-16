
import { assets, blog_data } from "@/Assets/assets";
import BlogItem from "./BlogItem";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  }

  useEffect(() => {
    fetchBlogs();
  }, [])

  const categories = ["All", "Technology", "Startup", "Lifestyle"];

  return (
    <div className="py-16 px-5 md:px-12 lg:px-28 bg-gradient-to-b from-gray-50 to-white">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setMenu(category)}
            className={`
              relative px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 
              ${menu === category
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:shadow-md hover:scale-105'
              }
            `}
          >
            {menu === category && (
              <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-pulse"></span>
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.filter((item) => menu === "All" ? true : item.category === menu).map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              id={blog._id}
              image={blog.image}
              category={blog.category}
              title={blog.title}
              description={blog.description}
            />
          )
        })}
      </div>

      {/* Empty State */}
      {blogs.filter((item) => menu === "All" ? true : item.category === menu).length === 0 && (
        <div className="text-center py-20">
          <div className="inline-block p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full mb-4">
            <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No blogs found</h3>
          <p className="text-gray-600">Try selecting a different category</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;