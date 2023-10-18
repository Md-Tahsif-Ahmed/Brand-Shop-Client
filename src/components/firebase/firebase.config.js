// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHI8E2RYpmM7fPlE9NCvQhuWJrm3Vclvk",
  authDomain: "brand-shop-client-5e3ec.firebaseapp.com",
  projectId: "brand-shop-client-5e3ec",
  storageBucket: "brand-shop-client-5e3ec.appspot.com",
  messagingSenderId: "122497488984",
  appId: "1:122497488984:web:039672ae8fbc4b8637122d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth;
