import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import UsersList from "./UsersList";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function UserDetails() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    _id: "",
  });
  const [list, setList] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/list`);
      setList(res.data.list);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //update
      if (formData._id) {
        await axios.put(
          `http://localhost:8000/website/api/update/${formData._id}`,
          formData
        );
        toast.success("updated");
      }
      //post
      else {
        await axios.post("http://localhost:8000/website/api/insert", formData);
        toast.success("submitted");
      }

      fetchData();

      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
        _id: "",
      });
    } catch (err) {
      console.log(err);
      toast.error("failed");
    }
  };
  return (
    <div className="py-3 font-bold px-3">
      <p className="text-4xl mx-auto w-[204px]">User Details</p>
      <div className="grid grid-cols-[30%_auto] gap-5">
        {/* form */}

        <div className="py-5 bg-gray-200 px-2">
          <p className="text-2xl ">Form</p>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <Label htmlFor="name">Your Name</Label>
            <TextInput
              id="name"
              type="text"
              onChange={handleChange}
              placeholder="name"
              name="name"
              required
              value={formData.name}
            />
            <Label htmlFor="email">Your Email</Label>
            <TextInput
              id="email"
              type="email"
              name="email"
              placeholder="name@flowbite.com"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <Label htmlFor="phone">your Phone</Label>
            <TextInput
              id="phone"
              type="tel"
              name="number"
              onChange={handleChange}
              placeholder="98437"
              required
              value={formData.number}
            />
            <Label htmlFor="message">your Message</Label>
            <Textarea
              id="message"
              placeholder="Leave a comment..."
              required
              name="message"
              value={formData.message}
              rows={4}
              onChange={handleChange}
            />
            <Button
              type="submit"
              className="bg-blue-400 text-white py-2 px-4 rounded-2xl"
            >
              {formData._id ? "update" : "submit"}
            </Button>
          </form>
        </div>
        <UsersList data={list} setData={setFormData} fetchData={fetchData} />
      </div>
      <Toaster />
    </div>
  );
}

export default UserDetails;
