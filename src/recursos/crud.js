import { collection, addDoc , query, where, onSnapshot, getDocs, doc, deleteDoc, updateDoc} from "firebase/firestore";
import firebase from "./firebase";
import {useEffect, useState} from "react";

const firestore = firebase.firestore


const insert = async ({cpf, email, endereco, nome, celular, nomeUser, uid}) => {
    const docRef = await addDoc(collection(firestore, "usuarios"), {
        cpf: cpf,
        email: email,
        endereco: endereco,
        fotoUser: "semFoto",
        funcao: "usuario",
        nome: nome,
        numero: celular,
        pontos: 0,
        nomeUser: nomeUser,
        userId: uid
      }).catch(error => (console.error(error)))
      console.log("Document written with ID: ", docRef.id); 
      }

      const insertEntregas = async ({endereco, nome, data, horario, peso, descricao, tipo, uid}) => {
        const pesoCompleto = peso + " Kg"
        const docRef = await addDoc(collection(firestore, "entregas"), {
            usuario: nome,
            data: data,
            endereco: endereco,
            horario: horario,
            peso: pesoCompleto,
            descricao: descricao,
            status: 0,
            tipo: tipo,
            userId: uid
          }).catch(error => (console.error(error)))
          console.log("Document written with ID: ", docRef.id); 
          }
    

    const SelectPatro = async () => {
        const qry = query(collection(firestore, "patrocinadores"))
        let dados = []
        
        try {   
            const querySnapshot = await getDocs(qry);
            const dadosSelect = querySnapshot.docs.map((doc) => {
                const data = doc.data();
                const id = doc.id;
                const {fotoPatro, nome} = data;
                return {fotoPatro, nome, id };
            });
            dados = dadosSelect
            console.log(dados)
        } catch (error) {
            console.error(error);
        }
        
            console.log("dados selectPatro");
            return dados;
        };
    
    const Select = async ({uid}) => {
        const qry = query(collection(firestore, "usuarios"), where("userId", "==", uid))
        let dados = []
    
        try {
            const querySnapshot = await getDocs(qry);
            const dadosSelect = querySnapshot.docs.map((doc) => {
                const data = doc.data();
                const id = doc.id;
                const { cpf, email, endereco, fotoUser, funcao, nome, numero,pontos,nomeUser, user, userId } = data;
                return { cpf, email, endereco, fotoUser, funcao, nome, numero,pontos,nomeUser, user, userId,id };
            });
            dados = dadosSelect
            console.log(dados)
        } catch (error) {
            console.error(error);
        }
    
        console.log("dados select");
        return dados;
    };



    const SelectDeliveryUser = async ({uid}) => {
        const qry = query(collection(firestore, "entregas"), where("userId", "==", uid))
        let dados = []
    
        try {
            const querySnapshot = await getDocs(qry);
            querySnapshot.docs.map((doc) => {
                const dataDelivery = doc.data();
                const id = doc.id;
                const  { usuario, data, endereco, horario, peso, descricao, status, tipo, userId } = dataDelivery;
                dados.push({ usuario, data, endereco, horario, peso, descricao, status, tipo, userId, id })
            });
        } catch (error) {
            console.error(error);
        }
    
        console.log("dados selectDeliveryUser", dados);
        return dados;
    };

    const SelectDelivery = async () => {
        const qry = query(collection(firestore, "entregas"))
        let dados = []
    
        try {
            const querySnapshot = await getDocs(qry);
            querySnapshot.docs.map((doc) => {
                const dataDelivery = doc.data();
                const id = doc.id;
                const { usuario, data, endereco, horario, peso, descricao, status, tipo, userId } = dataDelivery;
                dados.push({ usuario, data, endereco, horario, peso, descricao, status, tipo, userId, id })
            });
        } catch (error) {
            console.error(error);
        }

        console.log("dados selectDelivery");
        return dados;
    };

    const DeleteDelivery = async ({idDoc}) => {
        const document = doc(collection(firestore, "entregas"), idDoc)

        try{
            await deleteDoc(document)
            alert("A entrega foi apagada")
        } catch(error) {
            alert("Ouve um erro, recarregue o aplicativo")
        }
    }

    const DeleteDadosUser = async ({idDadosUser}) => {
        const document = doc(firestore, "usuarios", idDadosUser)

        try{
            await deleteDoc(document)
            alert("O usuário foi deletado")
        } catch(error) {
            alert("Ouve um erro ao deletar o usuário")
        }
    }

    const UpdateDelivery = async ({idDoc, dataUp}) => {
        const document = doc(collection(firestore, "entregas"), idDoc)
        console.log("dataUp", dataUp)
        try{
            await updateDoc(document, dataUp)
            alert("A entrega Completa")
        } catch(error) {
            alert("Ouve um erro, recarregue o aplicativo")
            console.error(error)
        }
    }

    const UpdateUser = async ({idDoc, dataUp}) => {
        const document = doc(collection(firestore, "usuarios"), idDoc)
        console.log("dataUp", dataUp)
        try{
            await updateDoc(document, dataUp)
            console.log("dados atualizados")
        } catch(error) {
            alert("Ouve um erro, recarregue o aplicativo")
            console.error(error)
        }
    }


export default {insert,insertEntregas,SelectPatro, Select, SelectDelivery, SelectDeliveryUser, DeleteDelivery, DeleteDadosUser, UpdateDelivery, UpdateUser}
