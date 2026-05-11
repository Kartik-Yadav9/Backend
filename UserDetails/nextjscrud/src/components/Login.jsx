"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [submitting, setSubmitting]= useState(false)
  const [error, setError]= useState("")
  const {login}= useAuth()

  const router= useRouter()

  let handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  let handleClick = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(formData)
      router.push("/dashboard")
      router.refresh()

      setFormData({ email: "", password: "" });
    } catch (err) {
      setError(err.message || "login failed")
    }
    finally{
        setSubmitting(false)
    }
  };
  return (
    <div>
      <p>LOGIN</p>
      {error && (
        <div className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </div>
      )}
      <form onSubmit={handleClick}>
        <label htmlFor="email">email</label>
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
        <button
          type="submit"
          disabled={submitting}
          className=" w-25 rounded-md bg-blue-600 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-zinc-400"
        >
          {submitting ? "Logging in " : "Log in"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
