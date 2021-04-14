import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Photos</Link>
      <Link to="/StarWars">Camera</Link>
    </div>
  );
}

export default Navbar;