import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../components/login/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentuser, setCurrentUser] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const unsub = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
      return () => {
        unsub();
      };
    }, 3000);

  }, []);

  const contextValue = {
    currentuser,
    setCurrentUser, // Exporting setCurrentUser from AuthContext
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthContext