// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPEfxc7BcUmyu-UnikuS476jrPk9KGveM",
  authDomain: "blogboxx.firebaseapp.com",
  projectId: "blogboxx",
  storageBucket: "blogboxx.appspot.com",
  messagingSenderId: "298647399708",
  appId: "1:298647399708:web:157b9183fdfc3284f9ded9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage=getStorage(app);


export{fireDb,auth,storage}