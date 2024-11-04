// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwge0RP3MVn26d937ghnce53Rp8NUtoJM",
  authDomain: "kodigo-app-82b0d.firebaseapp.com",
  projectId: "kodigo-app-82b0d",
  storageBucket: "kodigo-app-82b0d.firebasestorage.app",
  messagingSenderId: "279427112127",
  appId: "1:279427112127:web:6fdd7e27d06b9115eeba0a",
  measurementId: "G-H7ZVHKBYS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);