"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [submitting, setSubmitting]= useState(false)
  const [error, setError]= useState("")
  const {register} = useAuth()
  const router= useRouter()


  let handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  let handleClick = async (e) => {
    e.preventDefault();
     setSubmitting(true);
     setError("")
    try {
      await register(formData)
      router.push("/dashboard")
      router.refresh()
     
      setFormData({ name: "", email: "", password: "" });
    } catch (err) {
      setError(err.message || "registration failed")
    }finally{
        setSubmitting(false)
    }
  };
  return (
    <div>
      <p>Register</p>
      {error && (
        <div className="mb-4 rounded-md bg-red-50 px-3 py-2 text-white text-sm  dark:bg-red-950/40 dark:text-red-300">
          {error}
        </div>
      )}
      <form onSubmit={handleClick}>
        <label htmlFor="name">name</label>
        <input
          onChange={handleChange}
          placeholder="name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
        />
        <label>email</label>
        <input
          onChange={handleChange}
          placeholder="name"
          type="email"
          name="email"
          value={formData.email}
        />
        <label>password</label>
        <input
          onChange={handleChange}
          placeholder="name"
          type="password"
          name="password"
          value={formData.password}
        />
        <button type="submit" className="cursor-pointer">
          {submitting ? "Registering" : "Register"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
