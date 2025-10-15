// "use client";

// import { assets } from "@/Assets/assets";
// import axios from "axios";
// import Image from "next/image";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const AddBlog = () => {
//   const [image, setImage] = useState(null);
//   const [data, setData] = useState({
//     title: "",
//     description: "",
//     category: "Startup",
//     author: "Rubin Chhetri",
//     authorImg: "/author_img.png",
//   });

//   const onChangeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setData({ ...data, [name]: value });
//     console.log(data);
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     formData.append("category", data.category);
//     formData.append("author", data.author);
//     formData.append("authorImg", data.authorImg);
//     formData.append("image", image);
//     const response = await axios.post("/api/blog", formData);
//     if (response.data.success) {
//       toast.success(response.data.message);
//       setData({
//         title: "",
//         description: "",
//         category: "Startup",
//         author: "Rubin Chhetri",
//         authorImg: "/author_img.png",
//       });
//       setImage(null);
//     } else {
//       toast.error(response.data.message);
//     }
//   };
//   return (
//     <>
//       <form onSubmit={onSubmitHandler} className="pt-5 px-5  sm:pt-12 sm:pl-16">
//         <p className="text-xl">Upload Thumbnail</p>
//         <label htmlFor="image">
//           <Image
//             src={!image ? assets.upload_area : URL.createObjectURL(image)}
//             width={280} // fixed width
//             height={140} // fixed height (2:1 landscape)
//             alt="Upload area"
//             className="mt-4 object-cover rounded"
//           />
//         </label>
//         <input
//           onChange={(e) => setImage(e.target.files[0])}
//           type="file"
//           name="image"
//           id="image"
//           hidden
//           required
//         />
//         <p className="text-xl mt-4 ">Blog title</p>
//         <input
//           onChange={onChangeHandler}
//           value={data.title}
//           type="text"
//           name="title"
//           placeholder="Type here "
//           className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
//           id=""
//         />
//         <p className="text-xl mt-4 ">Blog description</p>
//         <textarea
//           onChange={onChangeHandler}
//           value={data.description}
//           type="text"
//           name="description"
//           placeholder="Add description here"
//           rows={6}
//           className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
//           id=""
//         />
//         <p className="text-xl mt-4">Blog Category</p>
//         <select
//           onChange={onChangeHandler}
//           name="category"
//           className="w-40 mt-4 px-4 py-3 border text-gray-500"
//         >
//           <option value="Startup">Startup</option>
//           <option value="Technology">Technology</option>
//           <option value="Lifestyle">Lifestyle</option>
//         </select>
//         <br />
//         <button type="submit" className="mt-3 w-40 h-12 bg-black text-white">
//           Add
//         </button>
//       </form>
//     </>
//   );
// };

// export default AddBlog;


// "use client";

// import { assets } from "@/Assets/assets";
// import axios from "axios";
// import Image from "next/image";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const AddBlog = () => {
//   const [image, setImage] = useState(null);
//   const [data, setData] = useState({
//     title: "",
//     description: "",
//     category: "Startup",
//     author: "Rubin Chhetri",
//     authorImg: "/author_img.png",
//   });

//   const onChangeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setData({ ...data, [name]: value });
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("title", data.title);
//       formData.append("description", data.description);
//       formData.append("category", data.category);
//       formData.append("author", data.author);
//       formData.append("authorImg", data.authorImg);
//       formData.append("image", image);

//       const response = await axios.post("/api/blog", formData);

//       if (response.data.success) {
//         toast.success(response.data.message);
//         setData({
//           title: "",
//           description: "",
//           category: "Startup",
//           author: "Rubin Chhetri",
//           authorImg: "/author_img.png",
//         });
//         setImage(null);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (err) {
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <div className="flex justify-center pt-10 sm:pt-16 px-5">
//       <form 
//         onSubmit={onSubmitHandler} 
//         className="w-full sm:w-[600px] p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 shadow-lg border border-white/10 backdrop-blur-sm"
//       >
//         <h2 className="text-2xl font-semibold text-white mb-6">Add New Blog</h2>

//         {/* Upload Thumbnail */}
//         <p className="text-white font-medium mb-2">Upload Thumbnail</p>
//         <label htmlFor="image" className="cursor-pointer">
//           <div className="relative w-full sm:w-[500px] h-[180px] rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center hover:scale-105 transition-transform duration-300">
//             <Image
//               src={!image ? assets.upload_area : URL.createObjectURL(image)}
//               fill
//               alt="Upload area"
//               className="object-cover"
//             />
//           </div>
//         </label>
//         <input
//           onChange={(e) => setImage(e.target.files[0])}
//           type="file"
//           name="image"
//           id="image"
//           hidden
//           required
//         />

//         {/* Title */}
//         <p className="text-white font-medium mt-6 mb-2">Blog Title</p>
//         <input
//           onChange={onChangeHandler}
//           value={data.title}
//           type="text"
//           name="title"
//           placeholder="Type blog title here..."
//           className="w-full sm:w-[500px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
//         />

//         {/* Description */}
//         <p className="text-white font-medium mt-6 mb-2">Blog Description</p>
//         <textarea
//           onChange={onChangeHandler}
//           value={data.description}
//           name="description"
//           rows={6}
//           placeholder="Write your blog content here..."
//           className="w-full sm:w-[500px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
//         />

//         {/* Category */}
//         <p className="text-white font-medium mt-6 mb-2">Category</p>
//         <select
//           onChange={onChangeHandler}
//           name="category"
//           value={data.category}
//           className="w-40 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
//         >
//           <option value="Startup">Startup</option>
//           <option value="Technology">Technology</option>
//           <option value="Lifestyle">Lifestyle</option>
//         </select>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="mt-8 w-40 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg hover:scale-105 transition-transform duration-300 text-white font-semibold"
//         >
//           Add Blog
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddBlog;


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
