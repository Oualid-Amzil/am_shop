import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxXnJi1ZruOIgKASc_ruxVq6bq4hNU6ZI",
  authDomain: "am-shop-fcfb7.firebaseapp.com",
  projectId: "am-shop-fcfb7",
  storageBucket: "am-shop-fcfb7.appspot.com",
  messagingSenderId: "1061896597143",
  appId: "1:1061896597143:web:e27f1ce8462475dcf8c3d2",
  measurementId: "G-M9QEJV2XHQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
