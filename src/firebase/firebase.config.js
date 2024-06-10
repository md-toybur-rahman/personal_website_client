// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAtKvX_6uytOWZqlCs6ZUX1phzRU017-I",
  authDomain: "my-portfolio-13e12.firebaseapp.com",
  projectId: "my-portfolio-13e12",
  storageBucket: "my-portfolio-13e12.appspot.com",
  messagingSenderId: "26748842529",
  appId: "1:26748842529:web:15466a42727dfcbf0a6960"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app