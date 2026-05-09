"use client";
import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [setData, setGetData] = useState({ email: "", password: "" });

  let handleChange = (e) => {
    const { name, value } = e.target;
    setGetData((prev) => ({ ...prev, [name]: value }));
  };

  let handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_URL}/auth/login`, setData);
      setGetData({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <p>LOGIN</p>
      <form onSubmit={handleClick}>
        <label htmlFor="email">email</label>
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
