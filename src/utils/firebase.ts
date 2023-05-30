import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore"; 
import firebaseConfig from "../firebaseConfig";
import { Receta } from "../types/Receta";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveRecetaInDB = async (receta: Receta) => {
    try {
        const docRef = await addDoc(collection(db, "Recetas"), receta);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export default{
    saveRecetaInDB
}