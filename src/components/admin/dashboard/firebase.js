import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBHG2MEvd2Z2C6eGIQwVcsqqHINXk-_Kto",
  authDomain: "message-app-454e7.firebaseapp.com",
  projectId: "message-app-454e7",
  storageBucket: "message-app-454e7.appspot.com",
  messagingSenderId: "355642215111",
  appId: "1:355642215111:web:f59d11153eb5ead23ccce2",
  measurementId: "G-NFZKQEY1C0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);