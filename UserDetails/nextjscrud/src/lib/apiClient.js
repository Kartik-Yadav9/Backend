import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_URL || "http://localhost:8000/website/api";

export const apiClient = axios.create({
  baseURL,
  withCredentials: true,
});
