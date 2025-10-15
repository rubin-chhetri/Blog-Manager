// "use client"

// import SubsTable from "@/Components/AdminComponents/SubsTable";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// const page = () => {
//   const [emails, setEmails] = useState([]);
 
//   const getSubscribers=async()=>{
//     const response=await axios.get('/api/email')
//     setEmails(response.data.emails)
//     console.log(response.data.emails)
//   }

//   useEffect(() => {
//     getSubscribers();
//   },[])
//   const deleteEmail = async (id) => {
//   try {
//    const response=await axios.delete(`/api/email?id=${id}`);
//     toast.success(response.data.message);
//     getSubscribers();
//   } catch (error) {
//     console.error(error);
//     toast.error("Failed to delete email");
//   }
// };


//   return (
//     <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
//       <h1>All Subscriptions</h1>
//       <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
//       <table className="w-full text:sm text-gray-500 ">
//         <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
//           <tr>
//             <th scope="col" className="px-6 py-3">Email SUubscription</th>
//             <th scope="col" className=" hidden sm:block px-6 py-3">Date</th>
//             <th scope="col" className="px-6 py-3">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {emails.map((email,i)=><SubsTable deleteEmail={deleteEmail} id={email._id} key={i} email={email.email} date={email.date}/>) }

//         </tbody>
//       </table>
//       </div>
//     </div>
//   );
// };

// export default page;

// "use client";

// import SubsTable from "@/Components/AdminComponents/SubsTable";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// const SubscriptionsPage = () => {
//   const [emails, setEmails] = useState([]);

//   const getSubscribers = async () => {
//     const response = await axios.get("/api/email");
//     setEmails(response.data.emails);
//   };

//   const deleteEmail = async (id) => {
//     try {
//       const response = await axios.delete(`/api/email?id=${id}`);
//       toast.success(response.data.message);
//       getSubscribers();
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to delete email");
//     }
//   };

//   useEffect(() => {
//     getSubscribers();
//   }, []);

//   return (
//     <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
//       <h1 className="text-2xl font-semibold text-white mb-6">All Subscriptions</h1>

//       <div className="overflow-x-auto rounded-2xl shadow-lg border border-white/10 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 scrollbar-hide max-w-[600px]">
//         <table className="w-full text-sm text-white">
//           <thead className="bg-white/10 text-left text-white/70 uppercase text-xs sm:text-sm">
//             <tr>
//               <th className="px-6 py-3">Email</th>
//               <th className="hidden sm:block px-6 py-3">Date</th>
//               <th className="px-6 py-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {emails.map((email, i) => (
//               <SubsTable
//                 key={i}
//                 id={email._id}
//                 email={email.email}
//                 date={email.date}
//                 deleteEmail={deleteEmail}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionsPage;


"use client";

import SubsTable from "@/Components/AdminComponents/SubsTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Subscriptions = () => {
  const [emails, setEmails] = useState([]);

  const getSubscribers = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  };

  const deleteEmail = async (id) => {
    try {
      await axios.delete(`/api/email?id=${id}`);
      toast.success("Deleted successfully");
      getSubscribers();
    } catch {
      toast.error("Failed to delete email");
    }
  };

  useEffect(() => {
    getSubscribers();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">All Subscriptions</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto border border-gray-200 rounded-xl bg-white/30 shadow-sm">
        <table className="w-full text-gray-700">
          <thead className="bg-white/50 text-left text-gray-600 uppercase text-sm">
            <tr>
              <th className="px-6 py-3">Email Subscription</th>
              <th className="hidden sm:block px-6 py-3">Date</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email) => (
              <SubsTable
                key={email._id}
                email={email.email}
                date={email.date}
                id={email._id}
                deleteEmail={deleteEmail}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscriptions;
