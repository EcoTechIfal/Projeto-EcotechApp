import React from "react";
import { Text, View, TextInput, KeyboardAvoidingView} from "react-native";
import { TouchableOpacity } from "react-native";
import firebase from "../../recursos/firebase";
import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

export default function RecoverPassword(){
    const [email, setEmail] = React.useState("")
    const auth = firebase.auth

    function Recover(emailRecover){
        sendPasswordResetEmail(auth, emailRecover)
        .then(()=>{
            console.log("Email de recuperação enviado com sucesso")
            alert("Email de recuperação enviado")
        }).catch((error)=>{
            console.log("Error no envio do email de recuperação")
            alert("Erro no envio do email, recarregue e tente novamente")
        })
    }
    return(
        <KeyboardAvoidingView>
            <View>
                <View>
                    <Text>Esqueci minha senha</Text>
                    <Text>
                        Para redefinir a senha, informe o e-mail do usuário cadastrado na sua conta e lhe enviaremos um link com as instruções
                    </Text>
                </View>
                <View>
                    <Text>E-mail</Text>
                    <TextInput  placeholder="Digite seu e-mail" onChangeText={setEmail}/>
                </View>
                <TouchableOpacity onPress={()=> Recover(email)}><Text>ENVIAR</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}