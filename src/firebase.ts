import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHI5CBT2okN7H2ohUZ0k-somqfnar1pOA",
  authDomain: "login-64d26.firebaseapp.com",
  projectId: "login-64d26",
  storageBucket: "login-64d26.appspot.com",
  messagingSenderId: "1095730658546",
  appId: "1:1095730658546:web:e2c28f066d0692994de46b"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
