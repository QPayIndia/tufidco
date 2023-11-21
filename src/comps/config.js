import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa0wCdVR_eaukFLHClj-w0WJnrsPsahmc",
  authDomain: "board-da360.firebaseapp.com",
  projectId: "board-da360",
  storageBucket: "board-da360.appspot.com",
  messagingSenderId: "428075880827",
  appId: "1:428075880827:web:eaa810f41c976c2022edde",
  measurementId: "G-XSE0R12PR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};