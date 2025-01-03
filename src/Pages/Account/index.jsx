import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserAccount = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("user_token");

    if (!token) {
      navigate("/login"); // If no token, redirect to login
    } else {
      // If token exists, fetch user details
      axios
        .get("http://localhost:5000/api/frontend/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data.user); // Set the user from the server response
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          localStorage.removeItem("user_token"); // Remove invalid token
          navigate("/login"); // Redirect to login page if token is invalid
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user_token"); // Clear token from localStorage
    setUser(null); // Clear user state
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Account Page</h2>
      {user ? (
        <div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserAccount;
