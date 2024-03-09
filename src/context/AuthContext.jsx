// AuthContext.js
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../components/login/firebase";

const AuthContext = createContext();

// const testUser = {
//   id: 1,
//   userName: "omar mahdy",
//   roles: [1, 2, 3],
//   // Image: require("./images/pfp.jpg"),
//   Age: 20,
//   PhoneNumber: "+00201029949333",
//   Email: "omarmahdy@gmail.com",
//   Address: "Tanta, El-Gharbia, Egypt",
//   City: "Tanta",
//   State_Country: "Egypt",
//   Postcode: 12345,
//   DateOfBirth: "12Th Nov 2003",
//   Insurance: {
//     // add more details later
//     CompanyName: "Insuance Company Name",
//     Notes: "this is notes on the insurance company i use.",
//   },
//   Appointments: {
//     Done: [],
//     // Queued: [appointments],
//   },
// };
export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(testUser);
  const [currentuser, setCurrentUser] = useState({});
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      unsub();
    };
  }, []);
  // const login = () => {
  // Perform login logic
  // setCurrentUser(true);
  // };

  // const logout = () => {
  //   // Perform logout logic
  //   setUser(false);
  // };

  // const contextValue = {
  //   user,
  //   login,
  //   logout,
  // };

  return (
    // <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    <AuthContext.Provider value={{ currentuser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
