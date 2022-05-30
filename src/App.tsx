import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectTheatre from "./components/SelectTheatre";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selectTheatre/:movieName" element={<SelectTheatre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
