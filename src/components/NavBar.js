import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Pentalog
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
