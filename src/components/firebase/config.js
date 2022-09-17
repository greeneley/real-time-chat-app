import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrCbs3R-ncr9GYaWBHbdbQrXbqQDvQ8-Q",
  authDomain: "chat-app-d19f0.firebaseapp.com",
  projectId: "chat-app-d19f0",
  storageBucket: "chat-app-d19f0.appspot.com",
  messagingSenderId: "148222597223",
  appId: "1:148222597223:web:a6028869f86286c836dcc2",
  measurementId: "G-TE05G2J3TJ",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Initialize Firebase

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
