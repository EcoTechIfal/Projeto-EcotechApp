import React from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import Styles from "./style";

export default function InitialScreen({navigation}){
    return(
       <View style={Styles.container}>
            <Image style={Styles.image} source={require('../../../assets/fundo.png')}/>
            <View style={Styles.bloco}>
            <Text style={Styles.title}>OLÁ, SEJA BEM-VINDO!</Text>
            <Text style={Styles.title2}>ESCOLHA UMA DAS OPÇÕES ABAIXO:</Text>
            <TouchableOpacity style={Styles.botton} onPress={()=> navigation.replace("Login Usuário")}><Text style={Styles.buttonText}>SOU MORADOR/A</Text></TouchableOpacity>
            <TouchableOpacity style={Styles.botton} onPress={()=> navigation.replace("Login Coletor")}><Text style={Styles.buttonText}>SOU COLETOR/A DE LIXO</Text></TouchableOpacity>
            </View>
       </View>
    )
}