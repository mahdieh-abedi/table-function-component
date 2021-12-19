import "./Form.css";

const Form = ({ rows, setRows, newRow, setNewRow }) => {
  const handleAddRow = (e) => {
    e.preventDefault();
    if (newRow.id) {
      setRows(rows.map(oldRow => (oldRow.id === newRow.id ? newRow : oldRow)));
    } else {
      setRows([...rows, { id: Math.floor(Math.random() * 10000), ...newRow }]);
    }
    setNewRow({ name: "", familyName: "", status: "", email: "" });
  };
  const handleChange = (e) => {
    const {name,value} = e.target;
    setNewRow({ ...newRow, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleAddRow}>
        <label htmlFor="name">Name:</label>
        <input
          required
          type="text"
          id="name"
          onChange={handleChange}
          name={"name"}
          value={newRow.name}
        ></input>
        <label htmlFor="familyname">FamilyName:</label>
        <input
          required
          type="text"
          id="familyname"
          onChange={handleChange}
          name={"familyName"}
          value={newRow.familyName}
        ></input>
        <label htmlFor="status">Status:</label>
        <input
          required
          type="text"
          id="status"
          onChange={handleChange}
          name={"status"}
          value={newRow.status}
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          required
          type="text"
          id="email"
          onChange={handleChange}
          name={"email"}
          value={newRow.email}
        ></input>
        <input className="AddBtn" type="submit"/>
      </form>
    </div>
  );
};

export default Form;
