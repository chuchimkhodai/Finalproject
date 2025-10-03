// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVK76xOZ-cO3I4jSA1r0u2WSJ5p43EYXg",
  authDomain: "fc26-minhphuc.firebaseapp.com",
  projectId: "fc26-minhphuc",
  storageBucket: "fc26-minhphuc.firebasestorage.app",
  messagingSenderId: "705880668674",
  appId: "1:705880668674:web:5297a313fdabbec564c51b",
  measurementId: "G-R9BMG3FWJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Export để sử dụng trong các file khác
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, collection, addDoc, getDocs, query, orderBy, serverTimestamp };
