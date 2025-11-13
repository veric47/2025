import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import QualitySafety from "./pages/QualitySafety";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const getSystemTheme = () =>
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [darkMode, setDarkMode] = useState(getSystemTheme);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setDarkMode(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => setDarkMode(prev => !prev);

  // Responsive navbar styles (can be lifted to CSS for large apps)
  const navStyle = {
    background: "var(--brand-purple)",
    color: "#fff",
    padding: "1.2rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 18px rgba(108,54,169,0.09)",
    position: "relative",
    zIndex: 100
  };

  const brandStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
    fontFamily: "inherit",
    letterSpacing: "0.04em"
  };

  const linkContainer = {
    display: "flex",
    gap: "1.9rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center"
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "1.07rem",
    position: "relative",
    padding: "0.2rem 0.8rem",
    transition: "color 0.3s"
  };

  const buttonStyle = {
    background: "var(--accent-yellow)",
    color: "var(--brand-purple)",
    border: "none",
    borderRadius: "19px",
    fontWeight: 700,
    padding: "7px 26px",
    marginLeft: "2rem",
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 2px 12px rgba(108,54,169,0.15)"
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"} style={{ minHeight: "100vh" }}>
      <Router>
        <nav style={navStyle}>
          {/* Brand/Logo Left */}
          <Link to="/" style={brandStyle}>Accentuate</Link>
          {/* Links Right */}
          <ul style={linkContainer}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/about" style={linkStyle}>About</Link></li>
            <li><Link to="/services" style={linkStyle}>Services</Link></li>
            <li><Link to="/projects" style={linkStyle}>Projects</Link></li>
            <li><Link to="/team" style={linkStyle}>Team</Link></li>
            <li><Link to="/quality-safety" style={linkStyle}>Quality & Safety</Link></li>
            <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
          </ul>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={buttonStyle}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
