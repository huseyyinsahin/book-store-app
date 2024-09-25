import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlertContext } from "./AlertProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../auth/firebaseConfig";

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

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result);
      navigate("/");
      showToast(`${result.user.displayName} Hoşgeldiniz` , "success");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, googleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
