import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";


const firebaseConfig = {
  apiKey: "AIzaSyCN4VVg3bz5BkqP4KFaWRYUR-SpZR3h6S8",
  authDomain: "altcoinprices-auth.firebaseapp.com",
  projectId: "altcoinprices-auth",
  storageBucket: "altcoinprices-auth.firebasestorage.app",
  messagingSenderId: "499246589957",
  appId: "1:499246589957:web:e89122afe2bbdc2e83946c",
  measurementId: "G-FDMPJ0V0PS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };