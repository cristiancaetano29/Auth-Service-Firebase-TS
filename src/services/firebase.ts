import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREAPIKEY_KEY,
    authDomain: import.meta.env.VITE_FITEAUTHDOMAIN_KEY,
    projectId: import.meta.env.VITE_FIREPROJECTID_KEY,
    storageBucket: import.meta.env.VITE_FIRESTORAGEBUCKET_KEY,
    messagingSenderId: import.meta.env.VITE_FIREMESSAGINGSENDERID_KEY,
    appId: import.meta.env.VITE_FIREAPPID_KEY,
    measurementId: import.meta.env.VITE_FIREMEASUREMENTID_KEY
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
