// import firebase from "firebase"; // Importing only the app module from firebase
// import * as firebase from 'firebase/compact/app';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"; // Importing firestore module separately if you're using Firestore
  const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyC88xjxyua7BbaTNy2aeKZztkewKRxnYpw",
    authDomain: "todo-app-94fb3.firebaseapp.com",
    projectId: "todo-app-94fb3",
    storageBucket: "todo-app-94fb3.appspot.com",
    messagingSenderId: "91057429938",
    appId: "1:91057429938:web:e55aa5f55c965bfb0398ab",
    measurementId: "G-WC4E211M7Y"
    });
    const db=firebaseapp.firestore();
    export  default db;
  