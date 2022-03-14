// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7ontOH4s8OEqoX7zuwSasB86nkO80C-0",
    authDomain: "shop-app-3d.firebaseapp.com",
    databaseURL: "https://shop-app-3d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shop-app-3d",
    storageBucket: "shop-app-3d.appspot.com",
    messagingSenderId: "849522352304",
    appId: "1:849522352304:web:0ee81d22848e8240de5b75",
    measurementId: "G-75H059HH7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()