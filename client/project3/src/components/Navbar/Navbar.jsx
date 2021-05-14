import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        ElectricAve
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/Homepage"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Your Avenue 
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Signup"
              className={window.location.pathname === "/Signup" ? "nav-link active" : "nav-link"}
            >
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Login"
              className={window.location.pathname === "/Login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
