// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnxLGp29ft3IK_6_uEe8drnfydKubIk8k",
  authDomain: "authapp-db688.firebaseapp.com",
  projectId: "authapp-db688",
  storageBucket: "authapp-db688.appspot.com",
  messagingSenderId: "759366672644",
  appId: "1:759366672644:web:a37a74453158421071b051"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {app,db};
