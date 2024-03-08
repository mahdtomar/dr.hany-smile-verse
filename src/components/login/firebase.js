import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage}from"firebase/storage"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBM5eUB_TXGNWgJ2aTTfWC-4kwcssxX56g",
  authDomain: "message-1ad6d.firebaseapp.com",
  projectId: "message-1ad6d",
  storageBucket: "message-1ad6d.appspot.com",
  messagingSenderId: "237891104495",
  appId: "1:237891104495:web:4de4bb9e41bc811958351a",
  measurementId: "G-XFW10NDHWG"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
