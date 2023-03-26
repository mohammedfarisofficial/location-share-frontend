import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Location from "./pages/Location";
import Home from "./pages/Home";
import StudentsStatus from "./pages/StudentsStatus";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/status" element={<StudentsStatus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
