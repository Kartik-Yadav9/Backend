"use client";

import { apiClient } from "@/lib/apiClient";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

//custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //check
  useEffect(() => {
    const checKAuth = async () => {
      try {
        let res = await apiClient.get("/auth/me");
        setUser(res?.data?.user || null);
      } catch (err) {
        console.log(err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checKAuth();
  }, []);

  //---Register-----
  const register = async (userData) => {
    try {
      const res = await apiClient.post("/auth/register", userData);
      setUser(res.data?.user ?? null);
      console.log(res.data?.user);
      return res.data;
    } catch (err) {
      const message = err?.response?.data?.message || "registration failed";
      throw new Error(message);
    }
  };

  //---login-----
  const login = async (credentials) => {
    try {
      const res = await apiClient.post("/auth/login", credentials);
      setUser(res.data?.user ?? null);
      console.log(res.data?.user);
      return res.data;
    } catch (err) {
      const message = err?.response?.data?.message || "login failed";
      throw new Error(message);
    }
  };

  //Logout
  const logout = async () => {
    try {
      await apiClient.post("/auth/logout");
      setUser(null);
    } catch (err) {
      console.log("logout error", err);
    }
  };
  let value = {
    user,
    login,
    register,
    loading,
    isAuthenticated: !!user, //!!value = force the value to become boolean
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
