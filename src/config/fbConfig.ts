import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

export const fbconfing = {
    apiKey: "AIzaSyCpWQyBcnX_EtUzE3J2oSZlG5JyX6EeeGY",
    authDomain: "fire-all-fc2bf.firebaseapp.com",
    projectId: "fire-all-fc2bf",
    storageBucket: "fire-all-fc2bf.appspot.com",
    messagingSenderId: "152724942809",
    appId: "1:152724942809:web:a3d9aa7a0038a0627773c8",
    measurementId: "G-WCM85GVTER"
}
firebase.initializeApp(fbconfing);
export const db = firebase.firestore()

firebase.firestore().enablePersistence()
    .catch((err) => {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });

export default firebase


