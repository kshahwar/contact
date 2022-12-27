
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAKStFm5xGExO_sxSgutsZNdor7gUInejU",
 authDomain: "contactavatar-683f0.firebaseapp.com",
  projectId: "contactavatar-683f0",
 storageBucket: "contactavatar-683f0.appspot.com",
   messagingSenderId: "256261130437",
 appId: "1:256261130437:web:42ff2eac39124dfd3448ac"
});

const db = firebaseApp.firestore();
export default db;