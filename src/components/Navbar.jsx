import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Accentuate
        </Link>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
          <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
          <li><Link to="/team" className="hover:text-yellow-400">Team</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
