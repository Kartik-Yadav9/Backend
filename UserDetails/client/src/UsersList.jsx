import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

function UsersList({ data, setData, fetchData }) {
  //-----------------dlt row----------------------
  const dltrow = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/website/api/delete/${id}`);

      toast.success("deleted");
      fetchData();
    } catch (err) {
      console.log("error", err);
      toast.error("failed");
    }
  };

  //------------------find row------------------
  let updateRow = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/website/api/find/${id}`
      );
      setData(res.data.row);
    } catch (err) {
      console.log("error", err);
      toast.error("failed");
    }
  };

  return (
    <div>
      <Toaster />
      <p>Users List</p>
      <table className=" bg-gray-200 border-spacing-y-4 w-full max-w-[750px]">
        <thead>
          <tr className="text-center text-white bg-gray-600">
            <th className="p-3">S No.</th>
            <th className="p-3">name</th>
            <th className="p-3">email</th>
            <th className="p-3">number</th>
            <th className="p-3">message</th>
            <th className="p-2">edit</th>
            <th className="p-2">delete</th>
          </tr>
        </thead>
        <tbody>
          {!data?.length ? (
            <tr className="text-center bg-gray-200">
              <td>no data</td>
            </tr>
          ) : (
            data.map((item, index) => {
              return (
                <tr key={index} className="text-center bg-gray-200">
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>{item.message}</td>
                  <td className="p-3">
                    <button onClick={() => updateRow(item._id)}>edit</button>
                  </td>

                  <td className="p-3">
                    <button onClick={() => dltrow(item._id)}>delete</button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
