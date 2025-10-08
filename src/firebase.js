// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUd4U04hdjGrq_H8W1nCtxq2b_2Zjldt4",
  authDomain: "motobath-2a0a5.firebaseapp.com",
  projectId: "motobath-2a0a5",
  storageBucket: "motobath-2a0a5.firebasestorage.app",
  messagingSenderId: "1059868107503",
  appId: "1:1059868107503:web:ac4d591d5af65ae33e311a",
  measurementId: "G-V55WJK34ND",
  databaseURL: "https://console.firebase.google.com/u/0/project/motobath-e705e/overview"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);