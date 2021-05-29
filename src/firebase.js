import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC8RlHZgeNja5pswR3mXSny_aUDMR5VV7A",
    authDomain: "alcon-harbor.firebaseapp.com",
    projectId: "alcon-harbor",
    storageBucket: "alcon-harbor.appspot.com",
    messagingSenderId: "741332999157",
    appId: "1:741332999157:web:05639b2799027dcdb45ebc",
  });
} else {
  firebase.app();
}

export default firebase;
