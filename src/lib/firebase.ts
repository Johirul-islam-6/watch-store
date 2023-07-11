
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.REACT_APP_apiKey,
//   authDomain: import.meta.env.REACT_APP_authDomain,
//   projectId: import.meta.env.REACT_APP_projectId,
//   storageBucket: import.meta.env.REACT_APP_storageBucket,
//   messagingSenderId: import.meta.env.REACT_APP_messagingSenderId,
//   appId: import.meta.env.REACT_APP_appId,
// };


const firebaseConfig = {
  apiKey: "AIzaSyCSxji4MquSg4VBGGVccxXitMR2_KQhp9M",
  authDomain: "watch-shop-8d7fb.firebaseapp.com",
  projectId: "watch-shop-8d7fb",
  storageBucket: "watch-shop-8d7fb.appspot.com",
  messagingSenderId: "441159106959",
  appId: "1:441159106959:web:d692f7415cf56d11db0bfa"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);