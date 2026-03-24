import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import api from "../../api";

const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001/";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
  });

  const handleChange = (e) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      loading: true,
      error: "",
    });

    const dashboardTab = window.open("", "_blank");

    if (dashboardTab) {
      dashboardTab.document.write("<p style='font-family:sans-serif;padding:16px;'>Logging you in...</p>");
      dashboardTab.opener = null;
    }

    try {
      await api.post("/auth/login", formData);

      if (dashboardTab) {
        dashboardTab.location.href = DASHBOARD_URL;
      } else {
        window.open(DASHBOARD_URL, "_blank");
      }

      navigate("/");
    } catch (error) {
      if (dashboardTab) {
        dashboardTab.close();
      }

      setStatus({
        loading: false,
        error: error.response?.data?.message || error.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <form onSubmit={handleSubmit} className="border rounded-4 bg-white shadow-sm p-4">
            <h3 className="mb-3">Login</h3>

            {location.state?.message && (
              <div className="alert alert-warning py-2">{location.state.message}</div>
            )}

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ padding: "0.9rem" }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ padding: "0.9rem" }}
              />
            </div>

            {status.error && <div className="alert alert-danger py-2">{status.error}</div>}

            <button
              type="submit"
              className="btn w-100"
              disabled={status.loading}
              style={{
                backgroundColor: "#387ed1",
                color: "white",
                padding: "0.9rem",
                fontSize: "1.05rem",
                fontWeight: "500",
                border: "none",
              }}
            >
              {status.loading ? "Logging in..." : "Login"}
            </button>

            <p style={{ marginTop: "1rem", marginBottom: 0, color: "#666" }}>
              New user?{" "}
              <Link
                to="/signup"
                style={{
                  color: "#387ed1",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Create account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
