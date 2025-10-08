// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider=({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password, displayName) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        if (displayName) {
          await updateProfile(res.user, { displayName });
        }
        await sendEmailVerification(res.user);
        return res.user;
      });

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const value = { user, loading, signup, login, logout, resetPassword };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider