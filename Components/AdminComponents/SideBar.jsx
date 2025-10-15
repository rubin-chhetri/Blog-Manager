// import { assets } from "@/Assets/assets";
// import Image from "next/image";
// import Link from "next/link";

// const SideBar = () => {
//   return (
//     <div className="flex flex-col bg-slate-100 ">
//       <div className="px-2 sm:pl-14 py-3  border border-black">
//        <Link href='/'><Image src={assets.logo} width={120} alt="sidebar logo" /></Link> 
//       </div>
//       <div className="w-28 sm:w-80 h-[140vh] relative py-12 border border-black">
//         <div className="w-[50%] sm:w-[80%] absolute right-0 ">
//           <Link href='/admin/addProduct' className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
//             <Image src={assets.add_icon} width={30} alt="add icon" />
//             <p className="text-sm">Add Blogs</p>
//           </Link>
//           <Link href='/admin/blogList' className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
//             <Image src={assets.blog_icon} width={30} alt="blogs" />
//             <p className="text-sm">Blog List</p>
//           </Link>
//           <Link href='/admin/subscriptions' className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
//             <Image src={assets.email_icon} width={30} alt="subscriptions" />
//             <p className="text-sm">Subscriptions</p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

// "use client";
// import { assets } from "@/Assets/assets";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const SideBar = () => {
//   const [activeLink, setActiveLink] = useState('');

//   const menuItems = [
//     {
//       href: '/admin/addProduct',
//       icon: assets.add_icon,
//       label: 'Add Blogs',
//       gradient: 'from-emerald-500 to-teal-500'
//     },
//     {
//       href: '/admin/blogList',
//       icon: assets.blog_icon,
//       label: 'Blog List',
//       gradient: 'from-indigo-500 to-purple-500'
//     },
//     {
//       href: '/admin/subscriptions',
//       icon: assets.email_icon,
//       label: 'Subscriptions',
//       gradient: 'from-pink-500 to-rose-500'
//     }
//   ];

//   return (
//     <div className="flex flex-col h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Header with Logo */}
//       <div className="px-6 py-6 border-b border-white/10 backdrop-blur-sm bg-white/5">
//         <Link href='/' className="block transition-transform duration-300 hover:scale-105">
//           <Image 
//             src={assets.logo} 
//             width={140} 
//             alt="sidebar logo" 
//             className="drop-shadow-2xl"
//           />
//         </Link>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="flex-1 px-4 py-8 overflow-y-auto">
//         <div className="space-y-3">
//           {menuItems.map((item, index) => (
//             <Link
//               key={index}
//               href={item.href}
//               onClick={() => setActiveLink(item.href)}
//               className={`
//                 group relative flex items-center gap-4 px-5 py-4 rounded-2xl
//                 transition-all duration-300 overflow-hidden
//                 ${activeLink === item.href 
//                   ? 'bg-white/20 shadow-lg shadow-purple-500/20' 
//                   : 'bg-white/5 hover:bg-white/10'
//                 }
//               `}
//             >
//               {/* Gradient background on hover */}
//               <div className={`
//                 absolute inset-0 bg-gradient-to-r ${item.gradient} 
//                 opacity-0 group-hover:opacity-10 transition-opacity duration-300
//               `}></div>

//               {/* Icon Container */}
//               <div className={`
//                 relative z-10 w-12 h-12 rounded-xl flex items-center justify-center
//                 bg-gradient-to-br ${item.gradient} 
//                 shadow-lg group-hover:scale-110 transition-transform duration-300
//               `}>
//                 <Image 
//                   src={item.icon} 
//                   width={24} 
//                   height={24}
//                   alt={item.label}
//                   className="filter brightness-0 invert"
//                 />
//               </div>

//               {/* Label */}
//               <span className="relative z-10 text-white font-medium text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
//                 {item.label}
//               </span>

//               {/* Arrow indicator on hover */}
//               <svg 
//                 className="relative z-10 ml-auto w-5 h-5 text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>

//               {/* Active indicator */}
//               {activeLink === item.href && (
//                 <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b ${item.gradient} rounded-r-full`}></div>
//               )}
//             </Link>
//           ))}
//         </div>

//         {/* Decorative Elements */}
//         <div className="mt-12 px-5">
//           <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 backdrop-blur-sm">
//             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//             </div>
//             <h3 className="text-white font-semibold mb-2 text-sm">Quick Tip</h3>
//             <p className="text-white/70 text-xs leading-relaxed">
//               Use keyboard shortcuts to navigate faster through your dashboard
//             </p>
//           </div>
//         </div>
//       </nav>

//       {/* Footer gradient line */}
//       <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
//     </div>
//   );
// };

// export default SideBar;

"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const menuItems = [
    { href: "/admin/addProduct", icon: assets.add_icon, label: "Add Blogs" },
    { href: "/admin/blogList", icon: assets.blog_icon, label: "Blog List" },
    { href: "/admin/subscriptions", icon: assets.email_icon, label: "Subscriptions" },
  ];

  return (
    <div className="flex flex-col h-screen bg-indigo-50 shadow-sm">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-gray-200">
        <Link href="/" className="block hover:scale-105 transition-transform duration-300">
          <Image src={assets.logo} width={140} alt="sidebar logo" />
        </Link>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              className={`relative flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300
                ${activeLink === item.href ? "bg-white shadow" : "hover:bg-white/50"}
              `}
            >
              <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-white/30 shadow-sm">
                <Image src={item.icon} width={24} height={24} alt={item.label} />
              </div>
              <span className="font-medium text-gray-800">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
