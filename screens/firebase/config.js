// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd5MoFmmxSE-FKM_UlEdxc0ajJUPbqRa8",
  authDomain: "utopian-pilot-345111.firebaseapp.com",

  // apiKey: "AIzaSyAS4xYY-FWwNN8RmvyiPb5XeGxYoB6eWlw",
  // authDomain: "iverify-feec5.firebaseapp.com",
  // projectId: "iverify-feec5",
  // storageBucket: "iverify-feec5.appspot.com",
  // messagingSenderId: "242482179420",
  // appId: "1:242482179420:web:fb1ab91020cfbc24c5e599",
};

let app;
if (firebase?.apps?.length === 0) {
  app = firebase?.initializeApp(firebaseConfig);
} else {
  app = firebase?.app();
}

const auth = firebase?.auth();

export { auth };
