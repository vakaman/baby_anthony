import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, signInWithGoogle as googleSignIn, signInWithFacebook as facebookSignIn } from "@/firebase";

// Função de login com Google
export const signInWithGoogle = () => {
  return googleSignIn();
};

// Função de login com Facebook
export const signInWithFacebook = () => {
  return facebookSignIn();
};

// Função para logout
export const logout = () => signOut(auth);

// Listener para monitorar o estado de autenticação
export const subscribeToAuthChanges = (callback) => {
  onAuthStateChanged(auth, callback);
};
