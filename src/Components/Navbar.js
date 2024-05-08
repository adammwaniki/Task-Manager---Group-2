import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  
  
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/" className="nav-link">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-link">Login</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/create-new-task" className="nav-link">Create New Task</NavLink>
        </li>
        <li>
          <NavLink to="/history" className="nav-link">History</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

