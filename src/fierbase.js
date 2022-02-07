// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBriDaZK_adoxU7DPWjmK0h44K85aARD2Q",
  authDomain: "su-bits-hyd-d8aa7.firebaseapp.com",
  projectId: "su-bits-hyd-d8aa7",
  storageBucket: "su-bits-hyd-d8aa7.appspot.com",
  messagingSenderId: "154288085316",
  appId: "1:154288085316:web:a554442c2ea2607e0b1f11",
  measurementId: "G-ZDPVSCX380"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = app.auth();

var storage = firebase.storage();
export default firebase;

export {
    app,db, storage, auth
};
