import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCKr2K5xn1QNdQwxigeBPWO2LYD2MMtlBQ",
  authDomain: "miniblog-64847.firebaseapp.com",
  projectId: "miniblog-64847",
  storageBucket: "miniblog-64847.appspot.com",
  messagingSenderId: "986554324295",
  appId: "1:986554324295:web:804d906a91ae9847b9a862"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}