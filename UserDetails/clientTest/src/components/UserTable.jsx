const UserTable = ({ loading, getData, handleDlt, handleUpdate }) => {
  return (
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
  );
};

export default UserTable;
