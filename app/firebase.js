// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // <-- added for file uploads

const firebaseConfig = {
  apiKey: "AIzaSyCuXQ0me5VxznWf3ShliFheTyuWpkOfk2o",
  authDomain: "indi-developers.firebaseapp.com",
  projectId: "indi-developers",
  storageBucket: "indi-developers.appspot.com", // fixed bucket format
  messagingSenderId: "1066111436465",
  appId: "1:1066111436465:web:139f6ca9752b058d560490",
  measurementId: "G-PF76KVD7X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, getAnalytics, storage }; // Export Firestore, Analytics, Storage
