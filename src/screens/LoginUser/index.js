
import React from "react";
import { View, Text, Button, TouchableOpacity, KeyboardAvoidingView,TextInput } from "react-native";
import Styles from "./style";
import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../../recursos/firebase";

export default function LoginUser({navigation}){
    const [email, setEmail] = React.useState("")
    const [senha, setSenha] = React.useState("")
    const auth = firebase.auth

    function Login(email, senha){
        signInWithEmailAndPassword(auth, email,senha)
        .then((userCredential) => {
            console.log('Login sucesso!');
            navigation.replace("Home")
        })
        .catch(error => {
          alert("Email ou senha inválidos")
      });
      
      }
      React.useEffect(()=>{
        setEmail("ecotechifal@gmail.com")
        setSenha("meioambiente")
      })
    return(
        <KeyboardAvoidingView>
            
            <View>
                <View>
                    <Text>Email</Text>
                    <TextInput value={email} placeholder="Email" onChangeText={setEmail}/>
                </View>
                <View>
                    <Text>Senha</Text>
                    <TextInput value={senha} secureTextEntry={true} placeholder="Senha" onChangeText={setSenha}/>
                </View>
                <TouchableOpacity>
                    <Text style={Styles.link} onPress={()=> navigation.navigate("Recuperar Senha")}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text onPress={()=> Login(email, senha)}>Entrar</Text>
                </TouchableOpacity>
                <View>
                    <Text>Não tem uma conta?</Text>
                    <TouchableOpacity><Text style={Styles.link} onPress={()=> navigation.navigate("Cadastro Usuário")}>inscreva-se</Text></TouchableOpacity>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}

