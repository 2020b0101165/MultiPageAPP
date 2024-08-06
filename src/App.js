import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import EntryPage from "./pages/EntryPage";
import TablePage from "./pages/TablePage";
import ChartPage from "./pages/ChartPage";

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/entry" element={<EntryPage addEntry={addEntry} />} />
        <Route path="/table" element={<TablePage entries={entries} />} />
        <Route path="/chart" element={<ChartPage entries={entries} />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
