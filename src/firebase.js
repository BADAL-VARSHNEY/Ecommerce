
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC1LzAwPKo92OmcoGbw53FLPC5rLTY-inw",
  authDomain: "ecommerce-994c6.firebaseapp.com",
  projectId: "ecommerce-994c6",
  storageBucket: "ecommerce-994c6.appspot.com",
  messagingSenderId: "618269917203",
  appId: "1:618269917203:web:f13b8550b8af5977407fe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
// export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()


export  {db};