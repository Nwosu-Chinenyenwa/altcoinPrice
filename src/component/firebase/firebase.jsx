import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getDatabase, ref, get, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCN4VVg3bz5BkqP4KFaWRYUR-SpZR3h6S8",
  authDomain: "altcoinprices-auth.firebaseapp.com",
  projectId: "altcoinprices-auth",
  storageBucket: "altcoinprices-auth.appspot.com",
  messagingSenderId: "499246589957",
  appId: "1:499246589957:web:e89122afe2bbdc2e83946c",
  measurementId: "G-FDMPJ0V0PS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, ref, get, set, onValue };