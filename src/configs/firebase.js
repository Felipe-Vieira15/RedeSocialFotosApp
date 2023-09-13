// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA43pE9RLNyezmYfOQ--YBNQYmNJEt_hnE",
  authDomain: "redesocial-bcad3.firebaseapp.com",
  projectId: "redesocial-bcad3",
  storageBucket: "redesocial-bcad3.appspot.com",
  messagingSenderId: "349731875443",
  appId: "1:349731875443:web:558c644d21fdc154cd1806",
  measurementId: "G-HM1X2FSG2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth, analytics, app};