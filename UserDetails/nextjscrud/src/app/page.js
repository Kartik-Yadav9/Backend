import Link from "next/link";
import React from "react";

function Home() {
  
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-4 py-20">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        User app
      </h1>
      <p className="text-center text-zinc-600 dark:text-zinc-400">
        Sign in or create an account to continue.
      </p>
      <div className="flex gap-3">
        <Link
          href="/login"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Home;
