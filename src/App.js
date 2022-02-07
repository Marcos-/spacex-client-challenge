import React from "react";
import { Routes, Route } from "react-router-dom";
import Past from "./pages/past";
import Upcoming from "./pages/upcoming";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to SpaceX</h1>
      <Routes>
        <Route path="/" element={<Past />} />
        <Route path="upcoming" element={<Upcoming />} />
      </Routes>
    </div>
  );
}