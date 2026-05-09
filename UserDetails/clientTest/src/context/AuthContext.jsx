import { createContext, useContext, useState, useEffect } from "react";
import { apiClient } from "../lib/apiClient";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await apiClient.get("/auth/me");
        setUser(response.data?.user ?? null);
      } catch (_error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const register = async (userData) => {
    try {
      const response = await apiClient.post("/auth/register", userData);
      setUser(response.data?.user ?? null);
      return response.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Registration failed";
      throw new Error(message);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await apiClient.post("/auth/login", credentials);
      setUser(response.data?.user ?? null);
      return response.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error?.message || "Login failed";
      throw new Error(message);
    }
  };

  const logout = async () => {
    try {
      await apiClient.post("/auth/logout");
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
