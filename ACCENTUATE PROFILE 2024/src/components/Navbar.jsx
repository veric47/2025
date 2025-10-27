import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    backgroundColor: "#e58ce9",
    color: "white",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const linkContainer = {
    display: "flex",
    gap: "2rem", // space between items
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white", textDecoration: "none" }}>
        Accentuate
      </Link>
      <ul style={linkContainer}>
        {["Home", "About", "Services", "Projects", "Team", "Contact"].map((item) => (
          <li key={item}>
            <Link
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
