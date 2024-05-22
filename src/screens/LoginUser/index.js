import React from "react";
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native";
import styles from "./style";
import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../../recursos/firebase";
import { buscarDados } from "../../funciotons/buscarDados";


export default function LoginUser({ navigation, route }) {
    const [email, setEmail] = React.useState("")
    const [senha, setSenha] = React.useState("")
    const [uid, setUid] = React.useState('')
    const [dados, setDados] = React.useState([])

    const auth = firebase.auth

    React.useEffect(() => {
        if (route.params) {
            setEmail(route.params.email)
        }
    }, [])

    function Login(email, senha) {
        signInWithEmailAndPassword(auth, email, senha)
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

    React.useEffect(() => {
        if (dados.funcao) {
            dados.funcao === "coletor" ?
                navigation.replace("HomeCollector", { uid: uid, dados: dados })
                :
                navigation.replace("HomeUser", { uid: uid, dados: dados })

        }
        setEmail("arthuralcantarab@gmail.com")
        setSenha("")
    }, [dados])

    return (
        <KeyboardAvoidingView style={styles.containerGeral}>
            <Image
                        style={styles.imgLogo}
                        source={'https://firebasestorage.googleapis.com/v0/b/ecotechv-14b06.appspot.com/o/Logos%2Ffundo.png?alt=media&token=1359a54a-8a0c-46bd-baea-0704e8e92408'}
                        alt="Logo_icon"
                    />
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Text style={styles.title}>Entre na sua conta</Text>
                    <Text style={styles.subtitle}>Entre na sua conta para poder acessar o app</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Endereço de e-mail</Text>
                    <TextInput value={email}
                        placeholder="name@exemplo.com"
                        placeholderTextColor={"#6b7280"}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Senha</Text>
                    <TextInput value={senha}
                        style={styles.input}
                        secureTextEntry={true}
                        placeholderTextColor={"#6b7280"}
                        placeholder="******"
                        onChangeText={setSenha} />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Recuperar Senha")}>
                    <View style={styles.recoverPasswordContainer}>
                        <Text>Click aqui para </Text>
                        <Text style={styles.recoverPassword}  >Recuperar sua senha</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Login(email, senha)}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText} >Entrar</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate("Cadastro Usuário")}>
                    <View style={styles.registerContainer}>
                        <Text>Não tem uma conta?</Text>
                        <Text style={styles.register} >Cadastrar-se</Text>
                    </View>
                </TouchableOpacity>


            </View>


        </KeyboardAvoidingView>
    )


}

