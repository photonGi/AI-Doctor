import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbJAtXJl6Fh-TpSOfYZBvEbLvc7g7AjPw",
  authDomain: "aiproject-3a966.firebaseapp.com",
  projectId: "aiproject-3a966",
  storageBucket: "aiproject-3a966.firebasestorage.app",
  messagingSenderId: "385376532321",
  appId: "1:385376532321:web:60a3827f2f65a34bde7720",
  measurementId: "G-9LJKS8W8MX",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
