// import { assets } from "@/Assets/assets";
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
//       <Image src={assets.logo_light} alt="logo" width={120}  priority />
//       <p className="text-sm text-white ">All rights reserved. Copyright © 2025</p>
//        <div className="flex">
//         <Image src={assets.facebook_icon} alt="facebook icon" width={40}  priority />
//         <Image src={assets.googleplus_icon} alt="googleplus icon" width={40}  priority />
//         <Image src={assets.twitter_icon} alt="twitter icon" width={40}  priority />
//        </div>
//     </div>
//   );
// };

// export default Footer;

import { assets } from "@/Assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-5 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      
      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <div className="group cursor-pointer transition-transform duration-300 hover:scale-110">
              <Image 
                src={assets.logo_light} 
                alt="logo" 
                width={140}  
                priority 
                className="drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Copyright Section */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-300 text-sm font-light tracking-wide">
              All rights reserved
            </p>
            <p className="text-white/60 text-xs">
              Copyright © 2025
            </p>
            <div className="mt-2 h-px w-24 mx-auto md:mx-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            <a 
              href="#" 
              className="group relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
            >
              <Image 
                src={assets.facebook_icon} 
                alt="facebook" 
                width={24} 
                height={24}
                priority 
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>

            <a 
              href="#" 
              className="group relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
            >
              <Image 
                src={assets.googleplus_icon} 
                alt="google plus" 
                width={24} 
                height={24}
                priority 
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>

            <a 
              href="#" 
              className="group relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
            >
              <Image 
                src={assets.twitter_icon} 
                alt="twitter" 
                width={24} 
                height={24}
                priority 
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-sky-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default Footer;