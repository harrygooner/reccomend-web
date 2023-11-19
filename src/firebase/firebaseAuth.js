// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl2FEyO_EB00fcmBR7DqIC08aKGNAB6hc",
  authDomain: "tasty-b9275.firebaseapp.com",
  projectId: "tasty-b9275",
  storageBucket: "tasty-b9275.appspot.com",
  messagingSenderId: "502553420269",
  appId: "1:502553420269:web:fcfd59b46d65c982ee07e4",
  measurementId: "G-CL210DXZ8X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
