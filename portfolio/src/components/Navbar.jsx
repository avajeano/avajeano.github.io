import { Link } from 'react-router-dom';
import './style sheets/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="https://drive.google.com/file/d/1KkOrfXj6Ai_DLdwmelF9sPfuzuB01SGP/view?usp=drive_link">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;