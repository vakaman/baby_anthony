import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configurações do Firebase
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

// Inicializa o Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Configura autenticação
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Detecta o ambiente e seleciona o método de autenticação apropriado
const isLocalhost = window.location.hostname === 'localhost';
const signInWithGoogle = () => isLocalhost ? signInWithPopup(auth, googleProvider) : signInWithRedirect(auth, googleProvider);
const signInWithFacebook = () => isLocalhost ? signInWithPopup(auth, facebookProvider) : signInWithRedirect(auth, facebookProvider);

// Verifica o resultado do redirecionamento (apenas em produção)
if (!isLocalhost) {
  getRedirectResult(auth)
    .then((result) => {
      if (result) {
        console.log("Usuário autenticado com sucesso via redirecionamento:", result.user);
      }
    })
    .catch((error) => {
      console.error("Erro ao autenticar com redirecionamento:", error);
    });
}

// Configura Firestore
const db = getFirestore(firebaseApp);

// Exporta os recursos necessários
export { firebaseApp, auth, signInWithGoogle, signInWithFacebook, db };
