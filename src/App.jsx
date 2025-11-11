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
  // Start with system color scheme
  const getSystemTheme = () =>
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [darkMode, setDarkMode] = useState(getSystemTheme);

  // Update theme if system changes (unless manually toggled)
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setDarkMode(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  // Manual override handler
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"} style={{ minHeight: "100vh" }}>
      <Router>
        <nav style={{ padding: "20px", background: "#0c60b5ff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/services">Services</Link> |{" "}
            <Link to="/projects">Projects</Link> |{" "}
            <Link to="/team">Team</Link> |{" "}
            <Link to="/quality-safety">Quality & Safety</Link> |{" "}
            <Link to="/contact">Contact</Link>
          </div>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              background: "none", color: "#fff", border: "1px solid #ffc", borderRadius: "16px",
              padding: "5px 18px", cursor: "pointer", fontWeight: 700
            }}
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
