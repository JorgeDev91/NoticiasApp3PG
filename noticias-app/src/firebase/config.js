// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAKN4PKf6ZH2JJEuC3kJ93o8jFz0IZbCI4",
  authDomain: "newsapp-b1983.firebaseapp.com",
  projectId: "newsapp-b1983",
  storageBucket: "newsapp-b1983.appspot.com",
  messagingSenderId: "666610844481",
  appId: "1:666610844481:web:247c1a1f11986186a3d7c0"

};

// Initialize Firebase
export const FirebaseApp  = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );