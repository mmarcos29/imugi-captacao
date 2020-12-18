import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDrSV9DfkC61_C_PatRuE8shT0P1PuhCwk",
    authDomain: "imugi-comercial.firebaseapp.com",
    databaseURL: "https://imugi-comercial-default-rtdb.firebaseio.com",
    projectId: "imugi-comercial",
    storageBucket: "imugi-comercial.appspot.com",
    messagingSenderId: "277535623041",
    appId: "1:277535623041:web:26da6a53e5f8cb3285ca80",
    measurementId: "G-ZWSM4QCJXB"
};

firebase.initializeApp(config);
export default firebase