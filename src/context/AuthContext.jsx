import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Simulate a user database
  const [users, setUsers] = useState([]);

  // Register function
  const register = (email, password) => {
    if (users.find((u) => u.email === email)) {
      return { error: "Email already registered" };
    }
    const newUser = { email, password };
    setUsers([...users, newUser]);
    setUser({ email });
    return { success: true };
  };

  // Login function
  const login = (email, password) => {
    const found = users.find((u) => u.email === email && u.password === password);
    if (found) {
      setUser({ email });
      return { success: true };
    }
    return { error: "Invalid email or password" };
  };

  // Logout function
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 