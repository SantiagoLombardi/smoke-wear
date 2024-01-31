// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3x0V8b75Y2rIq5M2hMPh0cV4rXaqrcDw",
  authDomain: "smoke-wear-prueba.firebaseapp.com",
  projectId: "smoke-wear-prueba",
  storageBucket: "smoke-wear-prueba.appspot.com",
  messagingSenderId: "713231854624",
  appId: "1:713231854624:web:b4d427d7908932da51a045",
  measurementId: "G-F8246W5JGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);