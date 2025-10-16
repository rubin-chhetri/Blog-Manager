
"use client";

import { useState } from "react";
import AddBlog from "./addProduct/page";
import BlogList from "./blogList/page";
import Subscriptions from "./subscriptions/page";

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("addBlog");

  const renderPage = () => {
    switch (activePage) {
      case "addBlog":
        return <AddBlog />;
      case "blogList":
        return <BlogList />;
      case "subscriptions":
        return <Subscriptions />;
      default:
        return <AddBlog />;
    }
  };

  return (
    <div className="flex-1 p-5 sm:p-10 bg-indigo-50 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Admin Dashboard</h1>

        {/* Page Buttons */}
        <div className="flex gap-3">
          {["addBlog", "blogList", "subscriptions"].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300
                ${activePage === page ? "bg-white shadow" : "bg-white/50 hover:bg-white"}
              `}
            >
              {page === "addBlog"
                ? "Add Blog"
                : page === "blogList"
                ? "Blog List"
                : "Subscriptions"}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full">{renderPage()}</div>
    </div>
  );
};

export default AdminDashboard;
