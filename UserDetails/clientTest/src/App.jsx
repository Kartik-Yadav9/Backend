import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    _id: "",
  });
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(false);

  const api = import.meta.env.VITE_API_URL;
  //=======================Post===========================

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      if (data._id) {
        await axios.put(`${api}/update/${data._id}`, data);
      } else {
        await axios.post(`${api}/insert`, data);
      }
      fetchData();
      setData({
        name: "",
        email: "",
        number: "",
        message: "",
        _id: "",
      });
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false)
    }
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  //=======================get===========================

  let fetchData = async () => {
    try {
      setLoading(true);
      let res = await axios.get(`${api}/list`);
      setGetData(res?.data?.list || []);
      console.log(res.data.list);
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  //=======================update===========================
  let handleUpdate = async (id) => {
    try {
      let res = await axios.get(`${api}/find/${id}`);
      setData(res?.data?.row || {}); //state is coming in obj
      console.log(res.data.row);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDlt = async (id) => {
    try {
      let dlt = await axios.delete(`${api}/delete/${id}`);
      console.log("dlt", dlt.data);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
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
        <button type="submit" disabled={loading}>{loading ? "saving" : "submit"}</button>
      </form>
      <div>
        <p>table</p>
        {loading && <div>loading....</div>}
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>number</th>
              <th>message</th>
              <th>button</th>
            </tr>
          </thead>
          <tbody>
            {getData?.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>{item.message}</td>
                  <td>
                    <button onClick={() => handleDlt(item._id)}>delete</button>
                    <button onClick={() => handleUpdate(item._id)}>edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
