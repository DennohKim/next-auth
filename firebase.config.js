// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "next-auth-83975.firebaseapp.com",
  projectId: "next-auth-83975",
  storageBucket: "next-auth-83975.appspot.com",
  messagingSenderId: "864990468371",
  appId: process.env.APP_ID,
  measurementId: "G-BFNW5GDX72"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp(): initializeApp(firebaseConfig);

//initialize db
const db = getFireStore(app);

//Get firebase storage
const storage = getStorage(app);

export { app, db, storage}



