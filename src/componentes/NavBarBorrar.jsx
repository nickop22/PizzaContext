import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="d-flex justify-content-between py-3 border-bottom">
      <h1>Pizzería Mamma Mia!</h1>
      <nav>
        {/* <button className="btn btn-warning me-2">Home</button>
        <button className="btn btn-warning me-2">Login</button>
        <button className="btn btn-warning">Register</button>
        <span className="badge bg-primary ms-3">Total: $25.000</span> */}
      </nav>
    </header>
  );
}

export default NavBar;
