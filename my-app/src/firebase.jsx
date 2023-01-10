import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCxmN7UVPTZ7Vu1aRBzIl0I3uz9GjDYyik",
  authDomain: "cakee-20c46.firebaseapp.com",
  projectId: "cakee-20c46",
  storageBucket: "cakee-20c46.appspot.com",
  messagingSenderId: "368307469254",
  appId: "1:368307469254:web:0269bb5b687a968b1b10c7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
