import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" >Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/create-new-task" >Create New Task</NavLink>
        </li>
        <li>
          <NavLink to="/history" >History</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
