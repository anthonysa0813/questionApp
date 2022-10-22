// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC7KTb4hGyxdbj2rxPBhuEKtzkTtZ7APA",
  authDomain: "quick-corewoman.firebaseapp.com",
  projectId: "quick-corewoman",
  storageBucket: "quick-corewoman.appspot.com",
  messagingSenderId: "685362066081",
  appId: "1:685362066081:web:70ac9c1b36edad0f9cb6e0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
