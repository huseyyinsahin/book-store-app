import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlertContext } from "./AlertProvider";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { showToast } = useAlertContext();
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (info) => {
    setUser(info);
    navigate("/");
    showToast("Giriş yapıldı", "success");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    showToast("Çıkış yapıldı", "success");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
