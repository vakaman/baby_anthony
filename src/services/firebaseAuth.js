import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "@/firebase";  // Certifique-se de que firebaseApp foi exportado do firebase.js

const auth = getAuth(firebaseApp);

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  return signInWithPopup(auth, provider);
};

export const logout = () => signOut(auth);

export const subscribeToAuthChanges = (callback) => {
  onAuthStateChanged(auth, callback);
};
