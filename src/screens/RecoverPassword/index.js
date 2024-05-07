import React from "react";
import { Text, View, TextInput, Image, KeyboardAvoidingView} from "react-native";
import { TouchableOpacity } from "react-native";
import Styles from "./style";

export default function RecoverPassword(){
    const [email, setEmail] = React.useState("")
    return(

        <KeyboardAvoidingView style={Styles.Fundo}> 

             <Image style={Styles.Img} />

            <View style ={Styles.Container}>

                <View style ={Styles.Geral}>
                    <Text style = {Styles.Title}>Esqueci minha senha</Text>
                    <Text style = {Styles.Text01}>
                        Para redefinir a senha, informe o e-mail do usuário cadastrado na sua conta e lhe enviaremos um link com as instruções.
                    </Text>
                </View>

                <View style = {Styles.User}>
                    <Text style = {Styles.Em}>E-mail ou usuário:</Text>
                    
                    <TextInput style = {Styles.Input} value="Email@ecotech.com" placeholder="Digite seu e-mail" onChangeText={setEmail}/>
                </View>

                <TouchableOpacity style = {Styles.Botton}>
                    <Text> ENVIAR </Text>  
                </TouchableOpacity>

                <TouchableOpacity>
                <Text style = {Styles.Cancel}>Cancelar</Text>
                </TouchableOpacity>
                
            </View>

        </KeyboardAvoidingView>
    )
}