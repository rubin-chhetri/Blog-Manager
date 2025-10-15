// "use client";
// import { assets } from "@/Assets/assets";
// import axios from "axios";
// import Image from "next/image";
// import { useState } from "react";
// import { toast } from "react-toastify";


// const Header = () => {
//   const [email,setEmail]=useState('');

//   const onSubmitHandler=async(e)=>{
//     e.preventDefault();
//     try {
//       await axios.post('/api/email',{email});
//       toast.success('Email sent successfully');
//     } catch (error) {
//       toast.error('Something went wrong');
//     }
//     setEmail('');
//   }
//   return (
//     <div className="py-5 px-5 md:px-12 lg:px-28">
//         <div className="flex justify-between items-center">
//             <Image
//             src={assets.logo}
//             alt="Logo image"
//             width={180}
//             className="w-[130px] sm:w-auto"
//             priority
//             />
//             <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">Get Started <Image src={assets.arrow} alt='button arrow'/></button>
//         </div>
//         <div className="text-center my-8">
//         <h1 className="text-3xl sm:text-5xl font-medium ">Latest Blogs</h1>
//         <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
//         <form onSubmit={onSubmitHandler} className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]" action="">
//         <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name="email" id="" placeholder="Enter your email" className="pl-4 outline-none" />
//         <button type="submit" className=" border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">Subscribe</button>
//         </form>
//         </div>
//     </div>
//   );
// };

// export default Header;


"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/email', { email });
      toast.success('Email sent successfully');
    } catch (error) {
      toast.error('Something went wrong');
    }
    setEmail('');
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-5 md:px-12 lg:px-28">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10">
        {/* Navigation */}
        <div className="flex justify-between items-center backdrop-blur-sm bg-white/30 rounded-2xl px-6 py-4 shadow-lg border border-white/50">
          <Image
            src={assets.logo}
            alt="Logo image"
            width={180}
            className="w-[130px] sm:w-auto"
            priority
          />
          <button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-2"
          >
            <span className="relative z-10">Get Started</span>
            <Image 
              src={assets.arrow} 
              alt='button arrow'
              className={`relative z-10 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''} filter invert brightness-0`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Hero Section */}
        <div className="text-center my-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text text-sm font-bold uppercase tracking-wider">
              Discover Stories
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-transparent bg-clip-text mb-6 leading-tight">
            Latest Blogs
          </h1>
          
          <p className="mt-6 max-w-[680px] mx-auto text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>

          {/* Newsletter Form */}
          <form 
            onSubmit={onSubmitHandler} 
            className="flex flex-col sm:flex-row gap-3 max-w-[560px] mx-auto mt-12"
          >
            <div className="flex-1 relative group">
              <input 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                type="email" 
                name="email" 
                placeholder="Enter your email address" 
                className="w-full px-6 py-4 rounded-full bg-white/80 backdrop-blur-sm border-2 border-purple-200 focus:border-purple-500 outline-none transition-all duration-300 focus:shadow-xl placeholder:text-gray-400"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            
            <button 
              type="submit" 
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Header;