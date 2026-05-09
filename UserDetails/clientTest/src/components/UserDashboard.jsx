import { useEffect, useState } from "react";
import { apiClient } from "../lib/apiClient";
import UserTable from "./UserTable";

const UserDashboard = ({ isAuthenticated }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    _id: "",
  });
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (data._id) {
        await apiClient.put(`/update/${data._id}`, data, {
          headers: { "Content-Type": "application/json" },
        });
      } else {
        await apiClient.post("/insert", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      await fetchData();
      setData({
        name: "",
        email: "",
        number: "",
        message: "",
        _id: "",
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await apiClient.get("/list");
      setGetData(res?.data?.list || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handleUpdate = async (id) => {
    try {
      const res = await apiClient.get(`/find/${id}`);
      setData(res?.data?.row || {});
    } catch (err) {
      console.log(err);
    }
  };

  const handleDlt = async (id) => {
    try {
      await apiClient.delete(`/delete/${id}`);
      await fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <p>Form</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={data.name}
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={data.email}
          />
        </div>
        <div>
          <label>number</label>
          <input
            type="number"
            onChange={handleChange}
            name="number"
            value={data.number}
          />
        </div>
        <div>
          <label>message</label>
          <textarea
            cols={20}
            rows={4}
            onChange={handleChange}
            name="message"
            value={data.message}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "saving" : "submit"}
        </button>
      </form>
      <UserTable
        loading={loading}
        getData={getData}
        handleDlt={handleDlt}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default UserDashboard;
