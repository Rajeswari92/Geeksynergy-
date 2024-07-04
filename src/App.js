// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Movies from "./components/Movies";
import CompanyInfo from "./components/CompanyInfo";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/company-info">Company Info</Link>
      </div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/company-info" element={<CompanyInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
