import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0Ro3V4wT2UG85PETF4U0woz_xB7sXeKw",
    authDomain: "todo-app-c494d.firebaseapp.com",
    projectId: "todo-app-c494d",
    storageBucket: "todo-app-c494d.appspot.com",
    messagingSenderId: "958439984634",
    appId: "1:958439984634:web:9c5ccc2a66826ec2eb6843",
    measurementId: "G-M2HRD3QERW"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  export { db }