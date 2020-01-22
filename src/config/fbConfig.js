import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA_ZoePTaGj6XEhtEhJb_jtOuvCVGdghjg",
  authDomain: "project-manager-app-bfa9d.firebaseapp.com",
  databaseURL: "https://project-manager-app-bfa9d.firebaseio.com",
  projectId: "project-manager-app-bfa9d",
  storageBucket: "project-manager-app-bfa9d.appspot.com",
  messagingSenderId: "750944044177",
  appId: "1:750944044177:web:4912a002c2c97696ceab30",
  measurementId: "G-W3Q8PHCGTT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
