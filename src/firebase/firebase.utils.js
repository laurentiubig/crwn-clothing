import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBf9suF8sA660JdHLzc5dT1vgCkfUaJVBo",
  authDomain: "crwn-db-acb03.firebaseapp.com",
  projectId: "crwn-db-acb03",
  storageBucket: "crwn-db-acb03.appspot.com",
  messagingSenderId: "1019869409724",
  appId: "1:1019869409724:web:baff209fc0662fc8e63bb9",
  measurementId: "G-RM8FL5BQQD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
