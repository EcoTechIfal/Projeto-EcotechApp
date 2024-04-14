import { signOut } from 'firebase/auth';
import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import firebase from '../../recursos/firebase';
import Icon from "react-native-vector-icons/FontAwesome"
import styles from './style';

export default function Configuration({navigation}){
    const [nome, setNome] = React.useState("Sem nome")
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
    return(
        <View style={styles.container}>
            <View  style={styles.bloco}>
                <Text>Image</Text>
                <View>
                    <Text>{nome}</Text>
                    <Text>Usuário</Text>
                    <TouchableOpacity style={styles.bottom} onPress={()=> navigation.navigate("Perfil Usuário")}><Text>Editar perfil</Text></TouchableOpacity>
                </View>
            </View>

            <View>
                <View>
                    <Icon name="users" size={30} color="black"/>
                    <Text>Convidar amigos</Text>
                </View>
                <View >
                    <Icon name="history" size={30} color="black"/>
                    <Text>Histórico de entregas</Text>
                    <Icon onPress={()=> navigation.navigate("Histórico")} name='angle-right' size={20} color="black"/>
                </View>
            </View>
            <TouchableOpacity style={styles.sair} onPress={()=> LogOut()}><Icon name="sign-out" size={30} color="black"/><Text>Sair</Text></TouchableOpacity>
        </View>
    )
}
