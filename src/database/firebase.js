// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYUOM7dVrjtQEHvVWmfWVs8Txx5NAo4Kw",
  authDomain: "ecotech-f0213.firebaseapp.com",
  projectId: "ecotech-f0213",
  storageBucket: "ecotech-f0213.appspot.com",
  messagingSenderId: "860909208979",
  appId: "1:860909208979:web:51895f98fe649f462ad466",
  measurementId: "G-4TV9NLLR9K"
};
// Initialize Firebase
const db = initializeApp(firebaseConfig);
const auth = getAuth(db)
const firestore = getFirestore(db)
const storage = getStorage(db)

export default {db, auth, firestore, storage}