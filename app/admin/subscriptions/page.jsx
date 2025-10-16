
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
