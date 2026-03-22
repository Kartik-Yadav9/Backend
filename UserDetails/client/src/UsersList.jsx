import React from 'react'

function UsersList() {
  return (
    <div>
      <p>Users List</p>
      <table className=" bg-gray-200 border-spacing-y-4 w-full max-w-[750px]">
        <tr className="text-center text-white bg-gray-600">
          <th className="p-3">S No.</th>
          <th className="p-3">name</th>
          <th className="p-3">email</th>
          <th className="p-3">number</th>
          <th className="p-3">message</th>
          <th className="p-2">edit</th>
          <th className="p-2">delete</th>
        </tr>
        <tbody>
          <tr className="text-center bg-gray-200">
            <td className="p-3">01</td>
            <td className="p-3">kartik</td>
            <td className="p-3">l@gmail.com</td>
            <td className="p-3">373738</td>
            <td className="p-3">message is this,</td>
            <button className="p-3">edit</button>
            <button className="p-3">delete</button>
          </tr>
          <tr className="bg-gray-200 text-center">
            <td className="p-3">02</td>
            <td className="p-3">kaik</td>
            <td className="p-3">laik@gmail.com</td>
            <td className="p-3">113738</td>
            <td className="p-3">disk is this</td>
            <button className="p-3">edit</button>
            <button className="p-3">delete</button>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UsersList