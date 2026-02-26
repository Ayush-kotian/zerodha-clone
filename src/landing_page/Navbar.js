import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg  border-bottom p-5"
      style={{ color: "white", height: "4rem" }}
    >
      <div class="container-fluid">
        <Link class="navbar-brand" href="#" style={{ padding: "4rem" }} to="/">
          <img src="media\images\logo.svg" style={{ width: "30%" }} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ padding: "0rem" }}
        >
          <form class="ms-auto" role="search">
            <ul class="navbar-nav ">
              <li class="nav-item" style={{ paddingRight: "2rem" }}>
                <Link class="nav-link active " aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item" style={{ paddingRight: "2rem" }}>
                <Link class="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item" style={{ paddingRight: "2rem" }}>
                <Link class="nav-link active" aria-current="page" to="/product">
                  Products
                </Link>
              </li>
              <li class="nav-item " style={{ paddingRight: "2rem" }}>
                <Link class="nav-link active" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item" style={{ paddingRight: "2rem" }}>
                <Link class="nav-link active" aria-current="page" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
