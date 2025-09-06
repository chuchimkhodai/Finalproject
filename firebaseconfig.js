// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
