// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyB5-UtAhBpNLk3OSIbcNpR5Q4iuPAC8M8I",
  // authDomain: "genius-car-services-67edf.firebaseapp.com",
  // projectId: "genius-car-services-67edf",
  // storageBucket: "genius-car-services-67edf.appspot.com",
  // messagingSenderId: "129765028814",
  // appId: "1:129765028814:web:2bd36c23dbfef31d1f319f",
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
