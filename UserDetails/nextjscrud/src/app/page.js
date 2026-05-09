"use client";
import Login from "@/components/Login";
import Register from "@/components/Register";
import React, { useState } from "react";

function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button
        onClick={() => setToggle(!toggle)}
        className="cursor-pointer bg-yellow-600 text-center mx-auto text-white w-[200px]"
      >
        {toggle ? "register" : "login"}
      </button>
      {toggle ? <Login /> : <Register />}
    </>
  );
}

export default Home;
