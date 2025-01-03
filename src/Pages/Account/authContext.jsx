// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("user_token");
      if (token) {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/frontend/user",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setUser(response.data.user);
        } catch (error) {
          localStorage.removeItem("user_token");
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (email, password) => {
    const response = await axios.post(
      "http://localhost:5000/api/frontend/login",
      {
        email,
        password,
      }
    );
    const { token, user } = response.data;
    localStorage.setItem("user_token", token);
    setUser(user);
    return user;
  };

  const register = async (name, email, password) => {
    const response = await axios.post(
      "http://localhost:5000/api/frontend/register",
      {
        name,
        email,
        password,
      }
    );
    return response.data.user;
  };

  const logout = () => {
    localStorage.removeItem("user_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
