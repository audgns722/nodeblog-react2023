import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6HPr4mgdCfpqvYLkel9ULqgqPp4O_f4s",
    authDomain: "react-blog-7a510.firebaseapp.com",
    projectId: "react-blog-7a510",
    storageBucket: "react-blog-7a510.appspot.com",
    messagingSenderId: "110496489728",
    appId: "1:110496489728:web:558ff11a97043b0b7953e5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;