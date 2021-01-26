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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
