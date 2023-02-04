
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD13MWhHpwJJG-y-aAn-tbT28H60cSlaos",
  authDomain: "netflix-adf61.firebaseapp.com",
  projectId: "netflix-adf61",
  storageBucket: "netflix-adf61.appspot.com",
  messagingSenderId: "282506112554",
  appId: "1:282506112554:web:b74c720d8b5dbcb79c9d53",
  measurementId: "G-GRLK2VB219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth= getAuth(app);