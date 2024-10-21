import React, { useState } from 'react';
import { View, Text, TextInput, Picker, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import firebase from '../../database/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import crud from '../../services/userService';
import styles from '../RegisterUser/style';
import { ScrollView } from 'react-native-gesture-handler';

export default function RegisterUser({ navigation }) {

    const [nome, setNome] = useState('');
    const [nomeUser, setNomeUser] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cpf, setCpf] = useState('');

    const auth = firebase.auth;

    function Register() {
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                const uid = user.uid
                console.log('Usuário criado com sucesso!');
                Inserir(uid)
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('Esse email já está sendo usado!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('Esse email não é valido!');
                }
                console.error(error);
            });
    }

    function Inserir(uid) {
        crud.insert({ cpf, email, endereco, nome, celular, nomeUser, uid })
        alert(`Usuário ${nome} cadastrado, agora faça login`)
        navigation.replace("Login Usuário", { email: email, senha: senha })
    }

    function CompRegis(){
        cpf === "" || email === "" || endereco === "" || senha === "" || celular === "" || nome === "" ? alert("preencha todos os dados") : Register()
    }
    // vagabundo preguiçoso 
    // React.useEffect(()=>{
    //     setNome("Dev o melhor que ta tendo") 
    //     setNomeUser("Dev")
    //     setCelular("não tenho")
    //     setEmail("dev@gmail.com")
    //     setSenha(123456)
    //     setCpf("não posso dizer")
    //     setEndereco("Web")
    // },[])

    return (
<KeyboardAvoidingView style={styles.container}>
        <ScrollView>
                <View>

                    <View style={styles.imgContainer}>

                        <Image
                            style={styles.imgLogo}
                            source={require('../../assets/fundo.png')}
                            alt="Logo_icon"
                        />
                        <Text style={styles.title}>Faça seu cadastro</Text>
                        <Text style={styles.subtitle}>Faça seu cadastro para poder acessar o app</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Nome</Text>
                        <TextInput
                            placeholder="Digite o nome completo"
                            style={styles.input}
                            onChangeText={setNome}
                            value={nome}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Nome de Usuário</Text>
                        <TextInput
                            placeholder="Digite o nome de usuário"
                            style={styles.input}
                            onChangeText={setNomeUser}
                            value={nomeUser}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Celular</Text>
                        <TextInput
                            placeholder="Digite o número de celular"
                            style={styles.input}
                            onChangeText={setCelular}
                            value={celular}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                            placeholder="Digite o email"
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Senha</Text>
                        <TextInput
                            placeholder="Digite a senha"
                            style={styles.input}
                            onChangeText={setSenha}
                            value={senha}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Endereço</Text>
                        <TextInput
                            placeholder="Digite o endereço"
                            style={styles.input}
                            onChangeText={setEndereco}
                            value={endereco}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>CPF</Text>
                        <TextInput
                            placeholder="Digite o CPF"
                            style={styles.input}
                            onChangeText={setCpf}
                            value={cpf}
                            keyboardType="numeric"
                        />
                    </View>
                    <TouchableOpacity onPress={()=> CompRegis()}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Concluir cadastro</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            
        </ScrollView>
        </KeyboardAvoidingView>
    );
}
