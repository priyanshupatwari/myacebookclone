import firebase from "firebase";
import "firebase/storage"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyD9E44wBtbblZG9b8_hv9_taLk2uHgg3eE",
 authDomain: "facebook-nextjs-x.firebaseapp.com",
 projectId: "facebook-nextjs-x",
 storageBucket: "facebook-nextjs-x.appspot.com",
 messagingSenderId: "338954626842",
 appId: "1:338954626842:web:174dec6f745bec4dc86ea3",
 measurementId: "G-Q9CC5GG9ET"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export {db, storage};