// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV0HYHAbOpnMWoLRtoeFU15pbBOZY7fL8",
  authDomain: "netflixgpt-9c659.firebaseapp.com",
  projectId: "netflixgpt-9c659",
  storageBucket: "netflixgpt-9c659.firebasestorage.app",
  messagingSenderId: "704498794230",
  appId: "1:704498794230:web:792997702ee90538ad36d7",
  measurementId: "G-KT3Z0510L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);