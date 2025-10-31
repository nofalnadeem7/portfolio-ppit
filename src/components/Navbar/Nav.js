import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-gradient-to-r from-purple-900 via-black to-purple-800 shadow-lg sticky top-0 z-50 backdrop-blur-md">
      <h1 className="text-2xl font-bold text-white tracking-wide">
        <span className="text-purple-400">Dream</span> Team
      </h1>
      <div className="space-x-8 text-lg font-medium">
        <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
          Home
        </Link>
        <Link to="/portfolio" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
          Portfolio
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
