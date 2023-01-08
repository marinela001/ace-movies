 // Import the functions you need from the SDKs you need
import { getApps, initializeApp,getApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7rHTIjSS0UNu5jr2Cq_XIZYyT1Z0nFB8",
  authDomain: "netflix-clone-a297a.firebaseapp.com",
  projectId: "netflix-clone-a297a",
  storageBucket: "netflix-clone-a297a.appspot.com",
  messagingSenderId: "139326226936",
  appId: "1:139326226936:web:ecfc147873b87605c8d60d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }