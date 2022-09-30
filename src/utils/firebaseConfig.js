// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnQuWX6o876yNcs9B3yeOe_ahDOvEuo9Q",
    authDomain: "zapas-uy.firebaseapp.com",
    projectId: "zapas-uy",
    storageBucket: "zapas-uy.appspot.com",
    messagingSenderId: "1000010015967",
    appId: "1:1000010015967:web:b65d8fd4b4aeaa1e9bf56a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);