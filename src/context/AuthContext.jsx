import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../components/login/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentuser, setCurrentUser] = useState({
    displayName: "omar mahdy",
    email: "omarmahdy@gmail.com",
    phoneNumber: "01029949333",
    address: "Tanta Elgharbia",
    Postcode: "000000",
    roles: [1, 2, 3]
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     const unsub = onAuthStateChanged(auth, (user) => {
  //       setCurrentUser(user);
  //     });
  //     return () => {
  //       unsub();
  //     };
  //   }, 3000);

  // }, []);

  const contextValue = {
    currentuser,
    setCurrentUser, // Exporting setCurrentUser from AuthContext
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthContext











































//import { createContext, useReducer } from "react";
// import AuthReducer from "./AuthReducer";
// const INITIAL_STATE = {
//   currentUser: null
// }
// const AuthContext = createContext(INITIAL_STATE)
// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
//   return (<AuthContext.Provider value={{ currentUser: state.current, dispatch }} >{children}</AuthContext.Provider>)
// }
// export default AuthContext