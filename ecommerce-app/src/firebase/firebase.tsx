// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {initializeFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHxTYWvBNosksnpx3zzmyYSeIUzA5kWb4",
  authDomain: "ecommerce-4be0e.firebaseapp.com",
  projectId: "ecommerce-4be0e",
  storageBucket: "ecommerce-4be0e.appspot.com",
  messagingSenderId: "892801424873",
  appId: "1:892801424873:web:7e5028735c1b009e66ff78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
        experimentalAutoDetectLongPolling: true,
    });
export const auth = getAuth(app);
