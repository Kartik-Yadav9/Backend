"use client";
import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [setData, setGetData] = useState({ name: "", email: "", password: "" });

  let handleChange = (e) => {
    const { name, value } = e.target;
    setGetData((prev) => ({ ...prev, [name]: value }));
  };

  let handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_URL}/auth/register`, setData);
      setGetData({ name: "", email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <p>Register</p>
      <form onSubmit={handleClick}>
        <label htmlFor="name">name</label>
        <input
          onChange={handleChange}
          placeholder="name"
          type="text"
          id="name"
          name="name"
          value={setData.name}
        />
        <label>email</label>
        <input
          onChange={handleChange}
          placeholder="name"
          type="email"
          name="email"
          value={setData.email}
        />
        <label>password</label>
        <input
          onChange={handleChange}
          placeholder="name"
          type="password"
          name="password"
          value={setData.password}
        />
        <button type="submit" className="cursor-pointer">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
