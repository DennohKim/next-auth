// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import { FacebookAuthProvider } from "firebase/auth";

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
  
const app = firebase.initializeApp(firebaseConfig);

//Get authenitcation
const auth = app.auth();

const provider = new firebase.auth.FacebookAuthProvider();

export { auth, provider }


