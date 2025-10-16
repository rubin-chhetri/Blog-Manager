
"use client";

import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const AddBlog = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Rubin Chhetri",
    authorImg: "/author_img.png",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    try {
      const response = await axios.post("/api/blog", formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setData({ title: "", description: "", category: "Startup", author: "Rubin Chhetri", authorImg: "/author_img.png" });
        setImage(null);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16 bg-white/30 p-6 rounded-xl shadow-sm">
      <p className="text-xl font-medium text-gray-800">Upload Thumbnail</p>
      <label htmlFor="image">
        <Image
          src={!image ? assets.upload_area : URL.createObjectURL(image)}
          width={280}
          height={140}
          alt="Upload area"
          className="mt-4 object-cover rounded-lg border border-gray-200"
        />
      </label>
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        name="image"
        id="image"
        hidden
        required
      />

      <p className="text-xl mt-4 font-medium text-gray-800">Blog Title</p>
      <input
        onChange={onChangeHandler}
        value={data.title}
        type="text"
        name="title"
        placeholder="Type here"
        className="w-full sm:w-[500px] mt-2 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-300"
      />

      <p className="text-xl mt-4 font-medium text-gray-800">Blog Description</p>
      <textarea
        onChange={onChangeHandler}
        value={data.description}
        name="description"
        placeholder="Add description here"
        rows={6}
        className="w-full sm:w-[500px] mt-2 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-300"
      />

      <p className="text-xl mt-4 font-medium text-gray-800">Blog Category</p>
      <select
        onChange={onChangeHandler}
        name="category"
        className="w-40 mt-2 px-4 py-3 border rounded-lg text-gray-700 outline-none focus:ring-2 focus:ring-indigo-300"
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>

      <button type="submit" className="mt-4 w-40 h-12 bg-indigo-100 text-indigo-800 font-semibold rounded-lg hover:bg-indigo-200 transition-colors">
        Add
      </button>
    </form>
  );
};

export default AddBlog;
