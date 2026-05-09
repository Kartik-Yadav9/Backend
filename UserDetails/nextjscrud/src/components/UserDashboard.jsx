"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import UserTable from "./UserTable";

axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/website/api";
axios.defaults.withCredentials = true;

const UserDashboard = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    _id: "",
  });
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/list");
      setGetData(res?.data?.list || []);
    } catch (err) {
      console.log(err);
      toast.error("Could not load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true);
      if (data._id) {
        await axios.put(`/update/${data._id}`, data, {
          headers: { "Content-Type": "application/json" },
        });
        toast.success("Record updated successfully.");
      } else {
        await axios.post("/insert", data, {
          headers: { "Content-Type": "application/json" },
        });
        toast.success("Record created successfully.");
      }

      await fetchData();
      setData({
        name: "",
        email: "",
        number: "",
        message: "",
        _id: "",
      });
    } catch (err) {
      console.log(err);
      toast.error("Save failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (id) => {
    try {
      const res = await axios.get(`/find/${id}`);
      setData(res?.data?.row || {});
      toast.success("Record loaded for editing.");
    } catch (err) {
      console.log(err);
      toast.error("Could not load this record.");
    }
  };

  const handleDlt = async (id) => {
    try {
      await axios.delete(`/delete/${id}`);
      await fetchData();
      toast.success("Record deleted successfully.");
    } catch (err) {
      console.log(err);
      toast.error("Delete failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 text-black">
      <Toaster position="top-right" />

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          User Dashboard
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Number */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Number
            </label>
            <input
              type="number"
              name="number"
              value={data.number}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              name="message"
              value={data.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Saving..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* Table */}
      <div className="max-w-5xl mx-auto mt-8 bg-white shadow-lg rounded-xl p-6">
        <UserTable
          loading={loading}
          getData={getData}
          handleDlt={handleDlt}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
