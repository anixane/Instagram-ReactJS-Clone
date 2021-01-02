import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBO5jDXRByWvtvTlz4nrGgnWnA5lxlX-PA",
    authDomain: "instagram-clone-3678b.firebaseapp.com",
    databaseURL: "https://instagram-clone-3678b.firebaseio.com",
    projectId: "instagram-clone-3678b",
    storageBucket: "instagram-clone-3678b.appspot.com",
    messagingSenderId: "883949819004",
    appId: "1:883949819004:web:7b9826f7a432ab5337a5f9",
    measurementId: "G-VQ535PXQHZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth, storage};