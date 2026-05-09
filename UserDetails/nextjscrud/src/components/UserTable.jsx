"use client";

const UserTable = ({ loading, getData, handleDlt, handleUpdate }) => {
  return (
    <div className="w-full text-black">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">User Table</h2>

      {loading && (
        <div className="text-blue-600 font-medium mb-4">Loading...</div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Number</th>
              <th className="px-4 py-3 text-left">Message</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {getData?.length > 0 ? (
              getData.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">{item.email}</td>
                  <td className="px-4 py-3">{item.number}</td>
                  <td className="px-4 py-3">{item.message}</td>

                  <td className="px-4 py-3 flex justify-center gap-3">
                    <button
                      onClick={() => handleUpdate(item._id)}
                      className="px-3 py-1 text-sm bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDlt(item._id)}
                      className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
