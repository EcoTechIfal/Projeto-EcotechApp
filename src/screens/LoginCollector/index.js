

import React from "react";
import { View, Text, Button, TouchableOpacity, KeyboardAvoidingView, TextInput, Image } from "react-native";
import styles from "./style";


export default function LoginCollector({ navigation }) {
    const [email, setEmail] = React.useState("")
    const [senha, setSenha] = React.useState("")

    function Login(email, senha) {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                console.log('Login sucesso!');
                navigation.replace("Home Coletor")
            })
            .catch(error => {
                alert("Email ou senha inválidos")
            });

    }

    return (
        <KeyboardAvoidingView style={styles.container}>

            <View>
                <View style={styles.imgContainer}>

                    <Image
                        style={styles.imgLogo}
                        source={require('../../../assets/fundo.png')}
                        alt="Logo_icon"
                    />
                    <Text style={styles.title}>Entre na sua conta</Text>
                    <Text style={styles.subtitle}>Entre na sua conta para poder acessar o app</Text>
                </View>


                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        value={email}
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
                        placeholder="********"
                        onChangeText={setSenha} />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Recuperar Senha")}>
                    <View style={styles.recoverPasswordContainer}>
                        <Text>Click aqui para </Text>
                        <Text style={styles.recoverPassword}>Recuperar sua senha</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Login()}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText} >Entrar</Text>
                    </View>
                </TouchableOpacity>

                {/**Coloquei aq o register, mas não pode ser o mesmo do user c===3 */}
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
