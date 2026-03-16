import { Button } from "flowbite-react";
import React, { useState } from "react";
import EnquiryList from "./EnquiryList";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Enquiry() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    _id: "",
  });
  let [gformData, getFormData] = useState([]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  let handleForm = (e) => {
    e.preventDefault();

    //condition
    if (formData._id) {
      //update
      axios
        .put(
          `http://localhost:8000/api/website/enquiry/update/${formData._id}`,
          formData
        ) //http://localhost:800/api/website/enquiry/insert
        .then((res) => {
          console.log(res), toast.success("submitted"), callData();
        }) //i want call data here
        .catch((err) => {
          console.log(err), toast.error("failed");
        });
      setFormData({ name: "", email: "", number: "", message: "" });
    } else {
      axios
        .post("http://localhost:8000/api/website/enquiry/insert", formData) //http://localhost:800/api/website/enquiry/insert
        .then((res) => {
          console.log(res), toast.success("submitted"), callData();
        }) //i want call data here
        .catch((err) => {
          console.log(err), toast.error("failed");
        });
      setFormData({ name: "", email: "", number: "", message: "" });
    }
  };

  let callData = () => {
    axios
      .get("http://localhost:8000/api/website/enquiry/list")
      .then((res) => getFormData(res.data.list))

      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ToastContainer />
      <h1 className="text-5xl text-center font-semibold mb-10">Enquiry Form</h1>
      <div className="flex justify-around">
        {/* form */}
        <form onSubmit={handleForm}>
          <div>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              onChange={handleChange}
              placeholder="name"
              required
              value={formData.name}
              name="name"
            />
          </div>
          <div>
            <label htmlFor="email">Your emai</label>
            <input
              type="text"
              onChange={handleChange}
              placeholder="email"
              required
              value={formData.email}
              name="email"
            />
          </div>
          <div>
            <label htmlFor="number">Your number</label>
            <input
              type="text"
              onChange={handleChange}
              placeholder="number"
              required
              value={formData.number}
              name="number"
            />
          </div>
          <div>
            <label htmlFor="message">Your message</label>
            <textarea
              rows={5}
              onChange={handleChange}
              value={formData.message}
              placeholder="write here"
              name="message"
              required
            />
          </div>
          <Button className="bg-black" type="submit">
            {formData._id ? "update" : "submit"}
          </Button>
        </form>

        {/* table */}
        <EnquiryList
          callData={callData}
          gformData={gformData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
}

export default Enquiry;
