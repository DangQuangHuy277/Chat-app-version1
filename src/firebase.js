import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJON-ioqBANCs7d4HVA5POUi0fJT4ta-k",
  authDomain: "chat-app-version1.firebaseapp.com",
  projectId: "chat-app-version1",
  storageBucket: "chat-app-version1.appspot.com",
  messagingSenderId: "493923484173",
  appId: "1:493923484173:web:f5023693600fda4802cb44",
  measurementId: "G-X8V6TJ8S4W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider(auth);

export const signInWithGoogle =  () => {
  return signInWithPopup(auth, provider)
}

export const signOutUser = () => {
  signOut(auth);
}
