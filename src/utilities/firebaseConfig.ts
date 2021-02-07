import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWYge8wO40ZmSulhUm3hhKqFj3R8ieHzI",
  authDomain: "vue-js-basic-project.firebaseapp.com",
  projectId: "vue-js-basic-project",
  storageBucket: "vue-js-basic-project.appspot.com",
  messagingSenderId: "454986557770",
  appId: "1:454986557770:web:b5b819bba508ccccd839b3",
  measurementId: "G-8TKF54DV25",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
