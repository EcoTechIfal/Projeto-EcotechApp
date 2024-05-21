// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDu0veQIgHd15PVtsV9d-H5OSLaExhaZSU",
  authDomain: "ecotechv-14b06.firebaseapp.com",
  projectId: "ecotechv-14b06",
  storageBucket: "ecotechv-14b06.appspot.com",
  messagingSenderId: "777148630125",
  appId: "1:777148630125:web:b3a70f9c9b633a793beb64",
  measurementId: "G-BTGQ8FQ2S9"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
const auth = getAuth(db)
const firestore = getFirestore(db)
const storage = getStorage(db)

export default {db, auth, firestore, storage}