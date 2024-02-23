// AuthContext.js
import { createContext, useState } from "react";

const AuthContext = createContext();
const testUser = {
  userName: "omar mahdy",
  role: [1, 2, 3],
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(testUser);
  const login = () => {
    // Perform login logic
    setUser(true);
  };

  const logout = () => {
    // Perform logout logic
    setUser(false);
  };

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
