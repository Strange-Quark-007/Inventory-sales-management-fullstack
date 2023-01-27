import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid" >
        <Link className="navbar-brand navbar-brand-title" to="/"  style={{color:'#f4a460', fontSize:'23px', fontFamily: "Itim",}}>
          Inventory & Sales Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontFamily: "Fira Code",fontSize: '17px'}}>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                className="nav-link nav-bar"
                aria-current="page"
                to="/stock"
              >
                Stock
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link nav-bar"
                aria-current="page"
                to="/sales"
              >
                Sales
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link nav-bar"
                aria-current="page"
                to="/stocklist"
              >
                Stock List
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link nav-bar"
                aria-current="page"
                to="/salesreport"
              >
                Sales Report
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
