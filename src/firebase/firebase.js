import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqyk0EWNTwAmXBYGo4E9rn6BU46KrVeWE",
  authDomain: "react-shopping-project-8db93.firebaseapp.com",
  projectId: "react-shopping-project-8db93",
  storageBucket: "react-shopping-project-8db93.appspot.com",
  messagingSenderId: "578689876034",
  appId: "1:578689876034:web:0253d68450763a0e98addb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
