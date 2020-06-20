import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBacw4cTQ67FE8yVUVcZD0bu_g4ISOeFsg",
  authDomain: "anonibus-3e823.firebaseapp.com",
  databaseURL: "https://anonibus-3e823.firebaseio.com",
  projectId: "anonibus-3e823",
  storageBucket: "anonibus-3e823.appspot.com",
  messagingSenderId: "366422661468",
  appId: "1:366422661468:web:6e6d64cb4bf1738d8b0999",
  measurementId: "G-75CJSNV0YS"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();