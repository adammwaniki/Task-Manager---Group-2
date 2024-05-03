import { NavLink } from "react-router-dom";
import "./NavBar.css";

// Initial placeholder routes for our project will be Home, About and Login
// We will discuss what routes we want to keep
// Defining the NavBar component 
function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        /* remember to add styling to Navlink in the Navbar.css file*/
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        className="nav-link"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default NavBar;