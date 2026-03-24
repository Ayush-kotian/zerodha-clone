import React, { useEffect, useState } from "react";
import "../index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import api from "../api";

const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001/";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchCurrentUser = async () => {
      try {
        const response = await api.get("/auth/me");

        if (!ignore) {
          setCurrentUser(response.data.user);
        }
      } catch (error) {
        if (!ignore) {
          setCurrentUser(null);
        }
      }
    };

    fetchCurrentUser();

    return () => {
      ignore = true;
    };
  }, [location.pathname]);

  const handleDashboardClick = async (e) => {
    e.preventDefault();

    try {
      await api.get("/auth/me");

      const dashboardTab = window.open(DASHBOARD_URL, "_blank");

      if (dashboardTab) {
        dashboardTab.opener = null;
      }
    } catch (error) {
      navigate("/login", {
        state: { message: "Please login to open the dashboard." },
      });
    }
  };

  const handleLogoutClick = async () => {
    try {
      await api.post("/auth/logout");
    } finally {
      setCurrentUser(null);
      navigate("/");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom p-5"
      style={{ color: "white", height: "4rem" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" style={{ padding: "4rem" }} to="/">
          <img src="media/images/logo.svg" alt="Zerodha clone logo" style={{ width: "30%" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ padding: "0rem" }}
        >
          <form className="ms-auto" role="search">
            <ul className="navbar-nav ">
              {!currentUser && (
                <li className="nav-item" style={{ paddingRight: "2rem" }}>
                  <Link className="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
              )}
              {!currentUser && (
                <li className="nav-item" style={{ paddingRight: "2rem" }}>
                  <Link className="nav-link active" aria-current="page" to="/login">
                    Login
                  </Link>
                </li>
              )}
              <li className="nav-item" style={{ paddingRight: "2rem" }}>
                <a className="nav-link active" href="/" onClick={handleDashboardClick}>
                  Dashboard
                </a>
              </li>
              <li className="nav-item" style={{ paddingRight: "2rem" }}>
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item" style={{ paddingRight: "2rem" }}>
                <Link className="nav-link active" aria-current="page" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item " style={{ paddingRight: "2rem" }}>
                <Link className="nav-link active" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item" style={{ paddingRight: "2rem" }}>
                <Link className="nav-link active" aria-current="page" to="/support">
                  Support
                </Link>
              </li>
              {currentUser && (
                <li className="nav-item" style={{ paddingRight: "2rem" }}>
                  <button
                    type="button"
                    className="nav-link active border-0 bg-transparent"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
