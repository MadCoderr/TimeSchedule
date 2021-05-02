import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBA6ghWuGvzXYh4zIPVc-jBekYeRCuSlWU",
  authDomain: "time-schedule-489bb.firebaseapp.com",
  projectId: "time-schedule-489bb",
  storageBucket: "time-schedule-489bb.appspot.com",
  messagingSenderId: "255666631580",
  appId: "1:255666631580:web:73c41842aeae2fd2ac8e59",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;
