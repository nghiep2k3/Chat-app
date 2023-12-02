import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnXTNr4qOAGLXVrc2EavHnb2IQIgmNU-Y",
  authDomain: "chat-app-86c57.firebaseapp.com",
  projectId: "chat-app-86c57",
  storageBucket: "chat-app-86c57.appspot.com",
  messagingSenderId: "535052884774",
  appId: "1:535052884774:web:84f306184bb9f216b4ffe7",
  measurementId: "G-3NETN3KHBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();