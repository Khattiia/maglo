// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, doc, getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQtdDMb2pIAS9fP6mV9Ml_rvCKDXggQ6k",
  authDomain: "maglo-1c404.firebaseapp.com",
  databaseURL: "https://maglo-1c404-default-rtdb.firebaseio.com",
  projectId: "maglo-1c404",
  storageBucket: "maglo-1c404.appspot.com",
  messagingSenderId: "413124681286",
  appId: "1:413124681286:web:f632a72d13066d3056f447",
  measurementId: "G-HNZ24EGQVH",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
