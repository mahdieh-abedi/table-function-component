import "./App.css";
import { Table, Form, Rows } from "./Components";
import { useState } from "react";

function App() {
  const [rows, setRows] = useState(Rows);
  const [newRow, setNewRow] = useState({
    name: "",
    familyName: "",
    status: "",
    email: "",
  });
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Form
        rows={rows}
        setRows={setRows}
        newRow={newRow}
        setNewRow={setNewRow}
      />
      <Table
        rows={rows}
        setRows={setRows}
        newRow={newRow}
        setNewRow={setNewRow}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
