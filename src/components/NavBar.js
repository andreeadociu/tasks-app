import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav data-testid="navbar">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          {props.title}
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
