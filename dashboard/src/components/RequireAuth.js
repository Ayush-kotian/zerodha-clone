import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

const RequireAuth = ({ children }) => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      window.location.href = `${FRONTEND_URL}/login`;
    }
  }, [loading, user]);

  if (loading) {
    return <div style={{ padding: "2rem" }}>Checking login...</div>;
  }

  if (!user) {
    return null;
  }

  return children;
};

export default RequireAuth;
