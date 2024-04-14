import { collection, addDoc } from "firebase/firestore";
import firebase from "./firebase";

const firestore = firebase.firestore

async function insert({cpf, email, endereco, nome, numero, user, uid}){
    const docRef = await addDoc(collection(firestore, "usuarios"), {
        cpf: {cpf},
        email: {email},
        endereco: {endereco},
        fotoUser: "semFoto",
        funcao: "usuario",
        nome: {nome},
        numero: {numero},
        pontos: 0,
        user: {user},
        userId: {uid}
      }).catch(error => (console.error(error)))
      console.log("Document written with ID: ", docRef.id); 
      }


export default {insert}