import "./table.css";

const Table = ({ rows, setRows, setNewRow }) => {
  const handleDeleteRow = (id) => {
    setRows(rows.filter(item => item.id !== id));
  };
  return (
    <div className="Page">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Family Name</th>
            <th>Status</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.familyName}</td>
              <td>{user.status}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => {
                    setNewRow(user);
                  }}
                >
                  Update
                </button>
                <button onClick={() => handleDeleteRow(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
