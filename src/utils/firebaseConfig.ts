import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBVuKYZwwssqrZV97fP1oB3VxNS5nDgKUk",
  authDomain: "zoom-clone-757d1.firebaseapp.com",
  projectId: "zoom-clone-757d1",
  storageBucket: "zoom-clone-757d1.firebasestorage.app",
  messagingSenderId: "1002554679614",
  appId: "1:1002554679614:web:09816763d2a0ca33930c6f",
  measurementId: "G-40S774PGTR",
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBVuKYZwwssqrZV97fP1oB3VxNS5nDgKUk",
//   authDomain: "zoom-clone-757d1.firebaseapp.com",
//   projectId: "zoom-clone-757d1",
//   storageBucket: "zoom-clone-757d1.firebasestorage.app",
//   messagingSenderId: "1002554679614",
//   appId: "1:1002554679614:web:09816763d2a0ca33930c6f",
//   measurementId: "G-40S774PGTR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);