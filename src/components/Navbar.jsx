import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
  background: "linear-gradient(90deg, var(--brand-purple) 80%, #191f2b 100%)",
  color: "#fff",
  boxShadow: "0 2px 18px rgba(108,54,169,0.08)",
  padding: "1.15rem 2rem",
  border: "none",
  borderRadius: "0",
  fontFamily: "inherit",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",     // KEY ADDITION
  top: 0,
  left: 0,
  width: "100vw",
  zIndex: 9999
};


  const brandStyle = {
    fontSize: "2.1rem",
    fontWeight: "700",
    color: "#fff",
    textDecoration: "none",
    fontFamily: "inherit",
    letterSpacing: "0.04em"
  };

  const linkContainer = {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center"
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "1.06rem",
    position: "relative",
    padding: "0.2rem 0.6rem",
    transition: "color 0.3s"
  };

  // Optional: add hover underline for modern look
  const activeLinkStyle = {
    ...linkStyle,
    borderBottom: "2px solid #ffcc33"
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={brandStyle}>
        Accentuate
      </Link>
      <ul style={linkContainer}>
        {["Home", "About", "Services", "Projects", "Team", "Contact"].map((item, idx) => (
          <li key={item}>
            <Link
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              style={linkStyle}
              // use activeLinkStyle if you want to highlight active route (needs logic)
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
