
// "use client";

// import { useState } from "react";

// // Import your page components
// import AddBlog from "./addProduct/page";
// import BlogList from "./blogList/page";
// import Subscriptions from "./subscriptions/page";

// const AdminDashboard = () => {
//   const [activePage, setActivePage] = useState("addBlog"); // default page

//   const renderPage = () => {
//     switch (activePage) {
//       case "addBlog":
//         return <AddBlog />;
//       case "blogList":
//         return <BlogList />;
//       case "subscriptions":
//         return <Subscriptions />;
//       default:
//         return <AddBlog />;
//     }
//   };

//   return (
//     <div className="flex-1 p-5 overflow-auto">
//       {/* Optional: Admin header */}
//       <h1 className="text-2xl font-semibold mb-5">Admin Dashboard</h1>

//       {/* Main Content */}
//       {renderPage()}
//     </div>
//   );
// };

// export default AdminDashboard;



// "use client";

// import { useState } from "react";

// // Import your page components
// import AddBlog from "./addProduct/page";
// import BlogList from "./blogList/page";
// import Subscriptions from "./subscriptions/page";

// const AdminDashboard = () => {
//   const [activePage, setActivePage] = useState("addBlog"); // default page

//   const renderPage = () => {
//     switch (activePage) {
//       case "addBlog":
//         return <AddBlog />;
//       case "blogList":
//         return <BlogList />;
//       case "subscriptions":
//         return <Subscriptions />;
//       default:
//         return <AddBlog />;
//     }
//   };

//   return (
//     <div className="flex-1 p-5 sm:p-10 overflow-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
//       {/* Admin Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
//         <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">
//           Admin Dashboard
//         </h1>

//         {/* Page Navigation Buttons */}
//         <div className="flex gap-3">
//           <button
//             onClick={() => setActivePage("addBlog")}
//             className={`px-4 py-2 rounded-xl font-medium text-white transition-all duration-300 ${
//               activePage === "addBlog"
//                 ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg"
//                 : "bg-white/10 hover:bg-white/20"
//             }`}
//           >
//             Add Blog
//           </button>

//           <button
//             onClick={() => setActivePage("blogList")}
//             className={`px-4 py-2 rounded-xl font-medium text-white transition-all duration-300 ${
//               activePage === "blogList"
//                 ? "bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
//                 : "bg-white/10 hover:bg-white/20"
//             }`}
//           >
//             Blog List
//           </button>

//           <button
//             onClick={() => setActivePage("subscriptions")}
//             className={`px-4 py-2 rounded-xl font-medium text-white transition-all duration-300 ${
//               activePage === "subscriptions"
//                 ? "bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg"
//                 : "bg-white/10 hover:bg-white/20"
//             }`}
//           >
//             Subscriptions
//           </button>
//         </div>
//       </div>

//       {/* Render Active Page */}
//       <div className="w-full">{renderPage()}</div>
//     </div>
//   );
// };

// export default AdminDashboard;


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
