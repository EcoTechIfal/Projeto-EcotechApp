import { signOut } from 'firebase/auth';
import React from 'react';
import {SafeAreaView, Image, View, Text, TouchableOpacity, Share} from 'react-native';
import firebase from '../../database/firebase';
import Icon from "react-native-vector-icons/FontAwesome"
import styles from './style';
import { buscarDadosEntregas } from '../../services/burcarDadosEntregas';
import { buscarDadosEntregasUsuarios } from '../../services/buscarDadosEntregasUsuario';

export default function Configuration({navigation, route}){
    const [nome, setNome] = React.useState("Sem nome")
    const [uid, setUid] = React.useState("")
    const [dados, setDados] = React.useState([])
    const [dadosColetas, setDadosColetas] = React.useState([])
    const [image, setImage] = React.useState('')

    const sharing = async()=>{
        try{
            const message = "Junte-se ao Ecotech, venha ajudar a cidade de São Miguel dos Campos"
            await Share.share({message: message})
        }catch(error){
            alert("erro no compartilhar")
        }
    }
    const auth = firebase.auth
    
    function LogOut(){
        signOut(auth)
        .then(()=>{
            console.log("Sign out OK!")
            navigation.replace("Login Usuário")
        }).catch((error)=>{
            console.error(error)
        })
    }

    React.useEffect(() => {   
        setUid(route.params.uid)
        setDados(route.params.dados)     
            if (dados != null) {
                setNome(dados.nomeUser);
                setImage(dados.fotoUser)
            }
    }, [uid]); 
    
    React.useEffect(() => {   
        let data = []
        async function busca() {
            dados.funcao === "coletor" ? data = await buscarDadosEntregas() :  data = await buscarDadosEntregasUsuarios(uid) 
            if (data != null) {
                setDadosColetas(data);
            }
        }
        busca();
    }, [uid]); 

    return(
        <SafeAreaView style={styles.container}>
              <View style={styles.container}>
                  <View style={styles.bloco}>
                      <TouchableOpacity  style={styles.imagem}>
                          {image ? <Image style={{ borderRadius:100, width: "100%", height: "100%"}}  source={{uri: `${image}?timestamp=${new Date().getTime()}`}}/> : <View></View>}
                      </TouchableOpacity>
                      <View style={styles.textoContainer}>
                          <Text style={styles.textoNome}>{nome}</Text>
                          {dados.funcao == "usuario" ? <Text  style={styles.textoFuncao}>Usuário</Text> : <Text style={styles.textoFuncao}>Coletor</Text>}
                          <TouchableOpacity style={styles.bottom} onPress={()=> navigation.navigate("Perfil Usuário", {dados: dados, uid: uid})} ><Text>Editar perfil</Text></TouchableOpacity>
                      </View>
                  </View>
      
                  <View>
                      <View style={styles.acao}>
                          <Icon style={styles.iconeContainer} name="users" size={30} color="black"/>
                          <Text onPress={()=> sharing()}>Convidar amigos</Text>
                      </View>
                      {dados.funcao === "coletor" ? 
                    <View style={styles.acao}>
                       <Icon style={styles.iconeContainer} name="history" size={30} color="black"/>
                       <Text>Histórico de coletas                                 </Text>
                       <Icon  onPress={()=> navigation.navigate("Histórico de Coletas",  {dados: dados, uid: uid, dadosColetas: dadosColetas})}  style={styles.iconeContainer} name='angle-right' size={30} color="black"/>
                    </View>
                   : 
                    <View style={styles.acao} >
                       <Icon style={styles.iconeContainer} name="history" size={30} color="black"/>
                       <Text>Histórico de entregas                                </Text>
                       <Icon  onPress={()=> navigation.navigate("Histórico de Entregas",  {dados: dados, uid: uid, dadosEntregas: dadosColetas})} style={styles.iconeContainer} name='angle-right' size={30} color="black"/>
                   </View>
                    }
                  </View>
                  <TouchableOpacity style={styles.sair} onPress={()=> LogOut()} >
                    <Icon style={styles.iconeSair} name="sign-out" size={30} color="black" />
                    <Text style={styles.textoSair}>Sair</Text>
                  </TouchableOpacity>
              </View>
              </SafeAreaView>
          )
        }