import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/recipes">recipes</Link>
      <Link to="/growers">grower</Link>
      <Link to="/signin">signin</Link>
      <Link to="/signup">signup</Link>
    </div>
  );
}

export default Navbar;
