// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import QualitySafety from "./pages/QualitySafety";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <nav style={{ padding: "20px", background: "#003366" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/services">Services</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/team">Team</Link> |{" "}
        <Link to="/quality-safety">Quality & Safety</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/quality-safety" element={<QualitySafety />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
