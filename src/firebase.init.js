// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7PGR81_w04Us1DsrbhuW7s3kLSDUjnGM",
    authDomain: "genius-car-services-450b7.firebaseapp.com",
    projectId: "genius-car-services-450b7",
    storageBucket: "genius-car-services-450b7.appspot.com",
    messagingSenderId: "69548449540",
    appId: "1:69548449540:web:80a1c6933ad4a1f1653a51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;