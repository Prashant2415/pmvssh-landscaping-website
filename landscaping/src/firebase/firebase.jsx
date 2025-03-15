// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlsZwuSXVz9-UZZB9aQ1BflwuhVVaDWpk",
  authDomain: "login-auth-929ce.firebaseapp.com",
  projectId: "login-auth-929ce",
  storageBucket: "login-auth-929ce.firebasestorage.app",
  messagingSenderId: "331529853487",
  appId: "1:331529853487:web:04263ce961b297c486c4da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export default app;