import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
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
      success: "",
    });

    try {
      await api.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      navigate("/");
    } catch (error) {
      setStatus({
        loading: false,
        error: error.response?.data?.message || error.message || "Something went wrong",
        success: "",
      });
    }
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center justify-content-between g-5">

        <div className="col-lg-5">

          <p
            style={{
              color: "#387ed1",
              fontWeight: "600",
              letterSpacing: "0.04em",
              marginBottom: "0.75rem",
            }}
          >
            Open a free demat and trading account
          </p>

          <h1
            style={{
              fontSize: "2.8rem",
              lineHeight: "1.2",
              color: "#424242",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Start investing with a clean, fast Zerodha-style experience
          </h1>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.8",
              color: "#666",
              marginBottom: "2rem",
            }}
          >
            Track holdings, place orders, and manage your portfolio from a
            simple dashboard built for everyday investors.
          </p>

          <form
            onSubmit={handleSubmit}
            className="border rounded-4 bg-white shadow-sm p-4"
            style={{ maxWidth: "460px" }}
          >

            <h4
              style={{
                color: "#424242",
                fontWeight: "600",
                marginBottom: "0.4rem",
              }}
            >
              Signup now
            </h4>

            <p style={{ color: "#777", marginBottom: "1.5rem" }}>
              Create your account
            </p>

            <div className="mb-3">
              <label className="form-label" style={{ color: "#555" }}>
                Full name
              </label>

              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ padding: "0.9rem" }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label" style={{ color: "#555" }}>
                Email address
              </label>

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
              <label className="form-label" style={{ color: "#555" }}>
                Password
              </label>

              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ padding: "0.9rem" }}
              />
            </div>

            {status.error && (
              <div className="alert alert-danger py-2">
                {status.error}
              </div>
            )}

            {status.success && (
              <div className="alert alert-success py-2">
                {status.success}
              </div>
            )}

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
              {status.loading ? "Creating account..." : "Continue"}
            </button>

            <p
              style={{
                fontSize: "0.92rem",
                color: "#888",
                marginTop: "1rem",
                marginBottom: 0,
                lineHeight: "1.7",
              }}
            >
              By proceeding, you agree to the terms and privacy policy.
            </p>

          </form>

          <p style={{ marginTop: "1.25rem", color: "#666" }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Log in
            </Link>
          </p>

        </div>

        <div className="col-lg-6 text-center">

          <img
            src="/media/images/signup.png"
            alt="Signup"
            className="img-fluid"
            style={{ maxWidth: "92%" }}
          />

          <div className="row mt-4 text-start">

            <div className="col-md-4 mb-3">
              <h5 style={{ color: "#424242", fontWeight: "600" }}>
                Paperless
              </h5>

              <p style={{ color: "#777", lineHeight: "1.7" }}>
                Complete the account opening flow online without manual paperwork.
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <h5 style={{ color: "#424242", fontWeight: "600" }}>
                Fast access
              </h5>

              <p style={{ color: "#777", lineHeight: "1.7" }}>
                Reach your dashboard quickly and start tracking orders and holdings.
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <h5 style={{ color: "#424242", fontWeight: "600" }}>
                Secure
              </h5>

              <p style={{ color: "#777", lineHeight: "1.7" }}>
                Password-based authentication with protected API routes.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Signup;

