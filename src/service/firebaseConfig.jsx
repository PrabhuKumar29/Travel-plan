// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtBTMuf2EJRJcHbRdnFCwtkT3EFmCqxdI",
  authDomain: "travel-genie-7.firebaseapp.com",
  projectId: "travel-genie-7",
  storageBucket: "travel-genie-7.firebasestorage.app",
  messagingSenderId: "474691893231",
  appId: "1:474691893231:web:6ceb55f007c9a069fde81a",
  measurementId: "G-THEXDYHG11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
// const analytics = getAnalytics(app);