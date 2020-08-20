import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <div className="mb-50">
      <nav className="navbar navbar-light bg-light">
          <h2>Interviews Reports</h2>
          <Link to="/" className="active-link">
        <span className="ml-auto" >
         Candidates
        </span>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
