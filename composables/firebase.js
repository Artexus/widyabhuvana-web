// Import the Firebase SDK
import {initializeApp} from '@firebase/app';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from '@firebase/auth';
import {collection, getDocs, getFirestore} from '@firebase/firestore';

// Initialize Firebase with your project's configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5ZpeG87jFAvVvVz1hNbw8YU7IgyY7Tyg",
    authDomain: "widyabhuvana.firebaseapp.com",
    projectId: "widyabhuvana",
    storageBucket: "widyabhuvana.appspot.com",
    messagingSenderId: "1067203953420",
    appId: "1:1067203953420:web:e09b76f5b6a012fb607f29",
    measurementId: "G-5WPMHBZQGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Firebase Authentication object
const auth = getAuth(app);

// Get a reference to the Firestore database
export const db = getFirestore(app); // Initialize Firestore

// Export the auth object and Firestore for use in other components
export const useFirebase = () => ({
    app,
    auth,
    createUserWithEmailAndPassword, // Export the function
    signInWithEmailAndPassword,
    db,
    collection,
    getDocs
});