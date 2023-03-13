// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5Gcre5uv6aL1ISSKIfBHqfANKFxmAcHs",
  authDomain: "insonialess.firebaseapp.com",
  projectId: "insonialess",
  storageBucket: "insonialess.appspot.com",
  messagingSenderId: "72458207661",
  appId: "1:72458207661:web:53d96e83af4675d5bce124",
  measurementId: "G-P0JDHCT9W1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);