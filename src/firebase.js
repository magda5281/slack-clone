import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
//connect front end with backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const db = getFirestore(firebaseApp);
// const auth = firebase.auth();
const auth = getAuth(firebaseApp);
// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
export { db, auth, provider };
