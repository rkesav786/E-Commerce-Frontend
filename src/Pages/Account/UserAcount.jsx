import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./authContext";
const UserAccount = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading state while checking authentication
  }

  if (!user) {
    return (
      <div className="container mt-5 text-center">
        <h2>You are not logged in.</h2>
        <p>Please login or register to access your account.</p>
        <Link to="/login" className="btn btn-primary m-2">
          Login
        </Link>
        <Link to="/register" className="btn btn-secondary m-2">
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <h2 className="text-center mb-4">Account Details</h2>
        <div className="mb-3">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserAccount;
