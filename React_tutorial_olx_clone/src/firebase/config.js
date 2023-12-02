import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlcQjtcWKby_Gn-nvL0OK9Rge1vGyBzMg",
    authDomain: "olx-clone-86085.firebaseapp.com",
    projectId: "olx-clone-86085",
    storageBucket: "olx-clone-86085.appspot.com",
    messagingSenderId: "369387450954",
    appId: "1:369387450954:web:1f3e3d5327debf6aa5ecb3",
    measurementId: "G-1R3EKQWH7E"
  };

  export default firebase.initializeApp(firebaseConfig)