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




  
  };

//initialize 
firebase.initializeApp(firebaseConfig);



//export const googleProvider = new firebase.auth.GoogleAuthProvider();
// en till 

//export const auth = firebase.auth();
export  default firebase;