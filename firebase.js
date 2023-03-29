import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBIZikWrA-4nxzbSso3mYfUeWIqL4jaJKI",
  authDomain: "sadiscount-react-native.firebaseapp.com",
  projectId: "sadiscount-react-native",
  storageBucket: "sadiscount-react-native.appspot.com",
  messagingSenderId: "66371898895",
  appId: "1:66371898895:web:8e9d1ebeb9d85f546edd7a",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { db, auth, firebase };
