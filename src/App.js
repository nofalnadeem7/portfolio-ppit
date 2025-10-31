import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Nav";
import HomePage from "./pages/Home";
import TeamPage from "./pages/TeamPage";

const App = () => {
  return (
    <Router>
      <div className="font-sans min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
