import React from "react";
import { View, Text, Button, TouchableOpacity, KeyboardAvoidingView,TextInput } from "react-native";
import Styles from "./style";
import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../../recursos/firebase";
import { buscarDados } from "../../funciotons/buscarDados";

export default function LoginUser({navigation, route}){
    const [email, setEmail] = React.useState("")
    const [senha, setSenha] = React.useState("")
    const [uid, setUid] = React.useState('')
    const [dados, setDados] = React.useState([])

    const auth = firebase.auth

    React.useEffect(()=>{
        if(route.params){
            setEmail(route.params.email)
        }
    }, [])

    function Login(email, senha){
        signInWithEmailAndPassword(auth, email,senha)
        .then((userCredential) => {
            const user = userCredential.user
            const uid = user.uid
            setUid(uid)
            console.log('Login sucesso!', uid);
        })
        .catch(error => {
          alert("Email ou senha inválidos")
      });
      }

      React.useEffect(() => {   
        async function busca() {
            const data = await buscarDados(uid);
            if (data != null) {
                setDados(data);
                console.log(data.funcao)
            }
        }
        busca();
    }, [uid]); 

    React.useEffect(()=>{
        if (dados.funcao) {
            dados.funcao === "coletor" ?
                navigation.replace("HomeCollector", {uid: uid, dados: dados})
            :
                navigation.replace("HomeUser", {uid: uid, dados: dados})
            
        }
    },[dados])

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

