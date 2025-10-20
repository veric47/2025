import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        {/* Logo / Company Name */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Accentuate
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-sm md:text-base">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-yellow-400 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-yellow-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/team" className="hover:text-yellow-400 transition-colors">
              Team
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
