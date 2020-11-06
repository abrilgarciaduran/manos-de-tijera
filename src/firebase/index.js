import * as firebase from 'firebase/app';
import 'firebase/firestore';
// import { firebaseConfig } from '../../config/firebase.config.js'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCWesL4_WIRptY0PbQAINB-_uk09XwaLuA",
    authDomain: "manos-de-tijera.firebaseapp.com",
    databaseURL: "https://manos-de-tijera.firebaseio.com",
    projectId: "manos-de-tijera",
    storageBucket: "manos-de-tijera.appspot.com",
    messagingSenderId: "341818922966",
    appId: "1:341818922966:web:2dc9306d88eef3a8b8b677"
})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}






