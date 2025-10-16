

import { assets } from "@/Assets/assets";
import Image from "next/image";

const BlogTable = ({ title, authorImg, author, date, deleteBlog, mongoId }) => {
  const newDate = new Date(date);
  return (
    <tr className="bg-white hover:bg-white/50 transition-colors duration-200">
      <th className="hidden sm:flex items-center gap-3 px-6 py-4 text-gray-800">
        <Image src={authorImg || assets.profile_icon} alt="author" width={50} height={50} className="rounded-full" />
        {author || "No Author"}
      </th>
      <td className="px-6 py-4 text-gray-700">{title || "No Title"}</td>
      <td className="px-6 py-4 text-gray-700">{newDate.toDateString()}</td>
      <td className="px-6 py-4">
        <button onClick={() => deleteBlog(mongoId)} className="px-3 py-1 bg-red-200 text-red-700 rounded-lg hover:bg-red-300 transition-colors">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BlogTable;
