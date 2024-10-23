// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQEFfkh7P6VnFeP8B6umBmba0h5sgbX0k",
  authDomain: "toybur-rahman.firebaseapp.com",
  projectId: "toybur-rahman",
  storageBucket: "toybur-rahman.appspot.com",
  messagingSenderId: "247988851250",
  appId: "1:247988851250:web:f7c1745206672027bc622b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app