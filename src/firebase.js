import firebase from 'firebase';
import 'firebase/auth';

import 'firebase/firestore';


const firebaseApp = firebase.initializeApp({

    
  apiKey: "AIzaSyBbsIHsJDpOifOicgRGuIY_I7bxYA-uSGU",
  authDomain: "fb-login-9943e.firebaseapp.com",
  projectId: "fb-login-9943e",
  storageBucket: "fb-login-9943e.appspot.com",
  messagingSenderId: "850230838885",
  appId: "1:850230838885:web:fe7cf89de6e9da74b2e88c"
      
    

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };