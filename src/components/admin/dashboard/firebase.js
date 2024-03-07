import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage}from"firebase/storage"
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyD5M21b3TxLJcDUXRNZqNUmzEiA1OWTIB0",
  authDomain: "message-96da6.firebaseapp.com",
  projectId: "message-96da6",
  storageBucket: "message-96da6.appspot.com",
  messagingSenderId: "428661081004",
  appId: "1:428661081004:web:a981f7b181af39b703f009",
  measurementId: "G-PKFWCY7Q7Q"};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// const analytics = getAnalytics(app);