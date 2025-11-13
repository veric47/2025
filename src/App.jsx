import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import QualitySafety from "./pages/QualitySafety";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function Navbar({ toggleTheme, darkMode }) {
  const location = useLocation();

  const navStyle = {
    background: "linear-gradient(90deg, var(--brand-purple) 80%, #191f2b 100%)",
     
    padding: "1.15rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 18px rgba(108,54,169,0.08)",
    position: "relative",
    zIndex: 100
  };

  const brandStyle = {
    fontWeight: 800,
    fontSize: "2rem",
    letterSpacing: ".04em",
    display: "flex",
    alignItems: "center"
  };

  const linkContainer = {
    display: "flex",
    gap: "2.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center"
  };

  const linkStyle = (path) => ({
    color: location.pathname === path ? "var(--accent-green)" : "#fff",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1.15rem",
    letterSpacing: "0.04em",
    position: "relative",
    paddingBottom: "2px",
    textTransform: "capitalize",
    borderBottom: location.pathname === path ? "3px solid var(--accent-green)" : "none",
    transition: "color .3s, border-bottom .3s"
  });

  const buttonStyle = {
    background: "var(--accent-green)",
     
    border: "none",
    borderRadius: "19px",
    fontWeight: 700,
    padding: "7px 26px",
    marginLeft: "2rem",
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 2px 12px rgba(25,195,125,0.15)"
  };

  return (
    <nav style={navStyle}>
      <div style={brandStyle}>Accentuate</div>
      <ul style={linkContainer}>
        <li><Link to="/" style={linkStyle("/")}>Home</Link></li>
        <li><Link to="/about" style={linkStyle("/about")}>About</Link></li>
        <li><Link to="/services" style={linkStyle("/services")}>Services</Link></li>
        <li><Link to="/projects" style={linkStyle("/projects")}>Projects</Link></li>
        <li><Link to="/team" style={linkStyle("/team")}>Team</Link></li>
        <li><Link to="/quality-safety" style={linkStyle("/quality-safety")}>Quality & Safety</Link></li>
        <li><Link to="/contact" style={linkStyle("/contact")}>Contact</Link></li>
      </ul>
      <button onClick={toggleTheme} style={buttonStyle}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

// Main App
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

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"} style={{ minHeight: "100vh" }}>
      <Router>
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
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
