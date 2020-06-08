import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// npm i -g firebase-tools paketet 
// npm i firebase
//....
//.env 
//config  exportera objectet
// object.apikey

//npm i dotenv 
require('dotenv').config()

const firebaseConfig = {
 //   apiKey: process.env.APIKEY,




  apiKey: "AIzaSyDiT79vpei4fNcO6rPSxVyyh5JKZxZeKgE",
    authDomain: "socialapp-66c9c.firebaseapp.com",
    databaseURL: "https://socialapp-66c9c.firebaseio.com",

    projectId: "socialapp-66c9c",
    storageBucket: "socialapp-66c9c.appspot.com",
    messagingSenderId: "1060087522654",
    appId: "1:1060087522654:web:a9a703113baef491d4dbcf",
    measurementId: "G-39GXEW90Q5"
  };

//initialize 
firebase.initializeApp(firebaseConfig);



//export const googleProvider = new firebase.auth.GoogleAuthProvider();
// en till 

//export const auth = firebase.auth();
export  default firebase;