import{getApp, getApps, initializeApp} from 'firebase/app';
import{getFirestore} from 'firebase/firestore';
import{getStorage} from 'firebase/storage';

const firebaseConfig = {

    apiKey: "AIzaSyAibmJdq0KAyAH0-7RjOu4YR7lmwDvfhNQ",
  
    authDomain: "ecommerceapp-45814.firebaseapp.com",
  
    databaseURL: "https://ecommerceapp-45814-default-rtdb.firebaseio.com",
  
    projectId: "ecommerceapp-45814",
  
    storageBucket: "ecommerceapp-45814.appspot.com",
  
    messagingSenderId: "81172147463",
  
    appId: "1:81172147463:web:bd93d97491906c2c6d29a2",
  
    measurementId: "G-2J8SP3BK4S"
  
  };

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export{app, firestore, storage};