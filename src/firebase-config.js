// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBluK0_EIzcDb-vpXPLI7OpG8771r9t_s4",
  authDomain: "chatapp-8b7ad.firebaseapp.com",
  projectId: "chatapp-8b7ad",
  storageBucket: "chatapp-8b7ad.appspot.com",
  messagingSenderId: "752416921117",
  appId: "1:752416921117:web:485581d1cb9a551da798f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
