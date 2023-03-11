import React from "react";
import Location from "./pages/Location";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// require("dotenv").config();
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
