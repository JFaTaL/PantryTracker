// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjcULqfstnfQ-lZD5p3ltM0oe1HJUCqwg",
  authDomain: "kitchenhub-e8ad6.firebaseapp.com",
  projectId: "kitchenhub-e8ad6",
  storageBucket: "kitchenhub-e8ad6.appspot.com",
  messagingSenderId: "679357493338",
  appId: "1:679357493338:web:5af7a90089c3931bcca863",
  measurementId: "G-R27D169NHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
