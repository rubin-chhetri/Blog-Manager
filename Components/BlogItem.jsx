// import { assets } from "@/Assets/assets";
// import Image from "next/image";
// import Link from "next/link";

// const BlogItem = ({ image, category, title, description, id }) => {
//   return (
//     <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] mt-5 ml-5">
//       <Link href={`/blogs/${id}`}>
//         <Image
//           src={image}
//           alt="blog image"
//           width={400}
//           height={200} // Landscape ratio
//           className="border-b border-black object-cover"
//         />
//       </Link>
//       <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm ">
//         {category}
//       </p>
//       <div className="p-5">
//         <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 ">
//           {title}
//         </h5>
//         <p
//           className="mb-3 text-sm tracking-tight text-gray-700"
//           dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
//         ></p>
//         <Link
//           href={`/blogs/${id}`}
//           className="inline-flex items-center py-2 font-semibold text-center"
//         >
//           Read More{" "}
//           <Image src={assets.arrow} alt="arrow" width={12} className="ml-2" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BlogItem;

import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BlogItem = ({ image, category, title, description, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  const categoryColors = {
    Technology: "from-blue-500 to-cyan-500",
    Startup: "from-green-500 to-emerald-500",
    Lifestyle: "from-pink-500 to-rose-500",
    default: "from-purple-500 to-indigo-500"
  };

  const gradientClass = categoryColors[category] || categoryColors.default;

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-10 pointer-events-none`}></div>

      {/* Image Container */}
      <Link href={`/blogs/${id}`}>
        <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
          <Image
            src={image}
            alt="blog image"
            width={400}
            height={225}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          
          {/* Category Badge - Floating */}
          <div className="absolute top-4 left-4 z-20">
            <span className={`inline-block px-4 py-1.5 rounded-full text-white text-xs font-semibold bg-gradient-to-r ${gradientClass} shadow-lg backdrop-blur-sm`}>
              {category}
            </span>
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link href={`/blogs/${id}`}>
          <h5 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
            {title}
          </h5>
        </Link>
        
        <div
          className="mb-4 text-sm text-gray-600 line-clamp-3 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
        ></div>

        {/* Read More Link */}
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 group-hover:gap-3 transition-all duration-300"
        >
          <span>Read More</span>
          <Image 
            src={assets.arrow} 
            alt="arrow" 
            width={12} 
            className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
          />
        </Link>
      </div>

      {/* Bottom accent line */}
      <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${gradientClass} transition-all duration-500`}></div>
    </div>
  );
};

export default BlogItem;
