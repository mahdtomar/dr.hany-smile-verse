import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage}from"firebase/storage"
import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyBM5eUB_TXGNWgJ2aTTfWC-4kwcssxX56g",
//   authDomain: "message-1ad6d.firebaseapp.com",
//   projectId: "message-1ad6d",
//   storageBucket: "message-1ad6d.appspot.com",
//   messagingSenderId: "237891104495",
//   appId: "1:237891104495:web:4de4bb9e41bc811958351a",
//   measurementId: "G-XFW10NDHWG"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCeK3JzV0yNNcD9ZAjSXQb9sRkV83mjcFI",
  authDomain: "testing-react-signup.firebaseapp.com",
  projectId: "testing-react-signup",
  storageBucket: "testing-react-signup.appspot.com",
  messagingSenderId: "432207163343",
  appId: "1:432207163343:web:bfea2b0f89a97cb0efacba",
  measurementId: "G-KGLREGFR9Y"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
