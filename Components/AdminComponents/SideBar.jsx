

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
