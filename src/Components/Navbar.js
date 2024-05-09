import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  
  
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/history" className="nav-link">History</NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav-link">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;