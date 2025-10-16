
"use client";

import { assets } from "@/Assets/assets";
import SideBar from "@/Components/AdminComponents/SideBar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-indigo-50">
      <SideBar />
      <ToastContainer theme="light" />
      
      <div className="flex flex-col flex-1">
        {/* Top Bar */}
        <div className="flex items-center justify-between w-full py-3 px-8 bg-white rounded-b-2xl shadow-sm border-b border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800">Admin Panel</h3>
          <Image src={assets.profile_icon} width={40} height={40} alt="Profile Icon" className="rounded-full" />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-10 bg-indigo-50">{children}</main>
      </div>
    </div>
  );
}
