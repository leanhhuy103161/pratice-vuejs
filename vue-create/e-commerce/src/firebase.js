import firebse from 'firebase/app'

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyBCgtPT7-ijqa7juDfHoav6-jMe_CHeWF4",
authDomain: "vue-firebase-1-16011999.firebaseapp.com",
databaseURL: "https://vue-firebase-1-16011999-default-rtdb.firebaseio.com",
projectId: "vue-firebase-1-16011999",
storageBucket: "vue-firebase-1-16011999.appspot.com",
messagingSenderId: "164947303591",
appId: "1:164947303591:web:416d1049f5a5d959bb4f82",
measurementId: "G-Y4B6JPM0LX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();

export {
    firebase,
    auth,
    db,
    storage,
    functions
}