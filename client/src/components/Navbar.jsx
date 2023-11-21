import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="hire-talent">
          Hire Talent
        </Link>
        <Link className="nav-link" to="need-talent">
          Required Talent
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
