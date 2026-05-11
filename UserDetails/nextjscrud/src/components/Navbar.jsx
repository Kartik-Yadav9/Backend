import { useAuth } from "@/context/AuthContext";
import { apiClient } from "@/lib/apiClient";
import React, { useState } from "react";

function Navbar() {
  const [loading, setLoading] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      setLoading(true)
    } catch (err) {
      console.log("error:", err);
    }finally{
        setLoading(false)
    }
  };

  return (
    <nav className="flex justify-around">
      <p>{user.name} </p>
      <button onClick={handleLogout} className="cursor-pointer hover:bg-red-400 hover:text-white transition ease-in-out duration-300">
        {loading ? "Logging out" : "logout"}
      </button>
    </nav>
  );
}

export default Navbar;
