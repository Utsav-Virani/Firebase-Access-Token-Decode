import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAI1GDwwKM_ATjGEp_EYRx6aprwcfobNmk",
    authDomain: "fers-4a88d.firebaseapp.com",
    databaseURL: "https://fers-4a88d-default-rtdb.firebaseio.com",
    projectId: "fers-4a88d",
    storageBucket: "fers-4a88d.appspot.com",
    messagingSenderId: "713915177376",
    appId: "1:713915177376:web:ca77eca29c16c52b306cc5",
    measurementId: "G-LMH20981Q7"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const config = firebase.initializeApp(firebaseConfig);

const dataBase = config.firestore();
export { dataBase, firebaseConfig, config as default };