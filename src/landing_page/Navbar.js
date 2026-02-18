import React from "react";
import "../index.css";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg  border-bottom p-5"
      style={{ color: "white", height: "4rem" }}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#" style={{ padding: "4rem" }}>
          <img src="media\images\logo.svg" style={{ width: "30%" }} />
        </a>
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
          style={{ padding: "20rem" }}
        >
          <form class="ms-auto" role="search">
            <ul class="navbar-nav ">
              <li class="nav-item" style={{ paddingRight: "2rem" }}>
                <a class="nav-link active " aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item" style={{ paddingRight: "2rem" }}>
                <a class="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item" style={{ paddingRight: "2rem" }}>
                <a class="nav-link active" aria-current="page" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item " style={{ paddingRight: "2rem" }}>
                <a class="nav-link active" aria-current="page" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item" style={{ paddingRight: "2rem" }}>
                <a class="nav-link active" aria-current="page" href="#">
                  Support
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
