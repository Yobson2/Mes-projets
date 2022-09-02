
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, query,doc,where} from "firebase/firestore"
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyCBnhmFp7RAek9pSh-mLgsTkKehERj9Esk",
  authDomain: "service-de-consultation.firebaseapp.com",
  projectId: "service-de-consultation",
  storageBucket: "service-de-consultation.appspot.com",
  messagingSenderId: "433848379572",
  appId: "1:433848379572:web:a9dd23ccca51c8d2594fe1",
  measurementId: "G-YNKE6ZYQYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

const userCollection=collection(db, 'users')
const userConsultation=collection(db, 'Consultation')
export const auth=getAuth(app)
// les fonctions

export const createUser= async user =>{
  console.log(user)
  console.log("user", user.emai, user.password)
  await createUserWithEmailAndPassword(auth, user.emai,user.passsword)
   const q= await addDoc(userCollection, user)

   if(q){
    alert("vous avez creer votre compte avec succès")
   }
   
}
 export const createConsultation= async user =>{
  const q= await addDoc(userConsultation, user)
  if(q){
   alert("message avec succès")
  }
  
}

export const loginUser= async (user, callback) =>{
  let res = {
    user: null,
    error: null
  }
  await signInWithEmailAndPassword(auth, user.emai, user.passsword)
  .then(userCredential=>{
    console.log(userCredential.user)
    res.user = userCredential.user
    return callback(res)
  }).catch(e=>{
    res.error = e.code
    return callback(res)
  })
}




