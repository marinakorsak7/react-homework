import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyDI5gAT2rSDcGeZJbGK4IyZ7AV3DsN3UEo",
  authDomain: "react-homework-5.firebaseapp.com",
  projectId: "react-homework-5",
  storageBucket: "react-homework-5.firebasestorage.app",
  messagingSenderId: "915567211614",
  appId: "1:915567211614:web:86c711d480ac876f6870cf",
  measurementId: "G-6YW1NR5NX6",
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
