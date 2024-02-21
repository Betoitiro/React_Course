import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//Configuração do firebase
const firebaseConfig = {
  apiKey: "AIzaSyAk_czSboAminLoNLn4sa_gGrQqdAHMgVs",
  authDomain: "mineblog-41680.firebaseapp.com",
  projectId: "mineblog-41680",
  storageBucket: "mineblog-41680.appspot.com",
  messagingSenderId: "106499657564",
  appId: "1:106499657564:web:7e51c7455697e1da133b99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
