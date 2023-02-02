import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8RA39T9QrU8a1ZBM0OBJxX7V0J3eK1d4",
  authDomain: "converseup-85e32.firebaseapp.com",
  projectId: "converseup-85e32",
  storageBucket: "converseup-85e32.appspot.com",
  messagingSenderId: "193840261001",
  appId: "1:193840261001:web:e8cbeb927a6db597b86358",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
