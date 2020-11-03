// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "clone-756de.firebaseapp.com",
  databaseURL: "https://clone-756de.firebaseio.com",
  projectId: "clone-756de",
  storageBucket: "clone-756de.appspot.com",
  messagingSenderId: "882690530625",
  appId: "1:882690530625:web:cc2e8a951cec8c76e155c0",
  measurementId: "G-QET6NDM0DT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
