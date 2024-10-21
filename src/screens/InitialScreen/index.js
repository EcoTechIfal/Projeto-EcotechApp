import React from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import Styles from "./style";

export default function InitialScreen({navigation}){
    return(
       <View style={Styles.container}>
            <Image style={Styles.image} source={require('../../assets/fundo.png')}/>
            <View style={Styles.bloco}>
            <Text style={Styles.title}>OLÁ, SEJA BEM-VINDO!</Text>
            <TouchableOpacity style={Styles.botton} onPress={()=> navigation.replace("Login Usuário")}><Text style={Styles.buttonText}>ENTRAR</Text></TouchableOpacity>
            </View>
       </View>
    )
}