import React, { useState } from 'react';
import { View, Text, TextInput, Picker, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Styles from "./style"
import firebase from '../../recursos/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import crud from '../../recursos/crud';
import { buscarDados } from '../../funciotons/buscarDados';

export default function RegisterUser({navigation}){

    const [nome, setNome] = useState('');
    const [nomeUser, setNomeUser] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cpf, setCpf] = useState('');
    
    const auth = firebase.auth;

    function Register(){
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

    function Inserir(uid){
       crud.insert({cpf, email, endereco, nome, celular, nomeUser, uid})
        alert(`Usuário ${nome} cadastrado, agora faça login`)
        navigation.replace("Login Usuário", {email: email, senha: senha})
    }
  
    React.useEffect(()=>{
        setNome("Dev o melhor que ta tendo")
        setNomeUser("Dev")
        setCelular("não tenho")
        setEmail("dev@gmail.com")
        setSenha(123456)
        setCpf("não posso dizer")
        setEndereco("Web")
    },[])
    
    return (
        
        <KeyboardAvoidingView>
            <View>
                <View>
                    <Text>Nome:</Text>
                    <TextInput placeholder="Digite o nome completo"
                    style={Styles.form}
                    onChangeText={setNome}
                    value={nome}
                    />
                </View>
                <View>
                    <Text>Nome de Usuário:</Text>
                    <TextInput placeholder="Digite o nome completo"
                    style={Styles.form}
                    onChangeText={setNomeUser}
                    value={nomeUser}
                    />
                </View>
                <View>
                    <Text>celular:</Text>
                    <TextInput placeholder="Digite o Numero de celular"
                    style={Styles.form}
                    onChangeText={setCelular}
                    value={celular}
                    keyboardType="numeric"
                    />
                </View>
                <View>
                    <Text> email:</Text>
                    <TextInput placeholder="Digite o email"
                    style={Styles.form}
                    onChangeText={setEmail}
                    value={email}
                    />
                </View>
                <View>
                    <Text>senha:</Text>
                    <TextInput placeholder="Digite a senha"
                    style={Styles.form}
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry={true}
                    /> 
                </View>
                <View>
                    <Text>endereco:</Text>
                    <TextInput placeholder=" Digite o Endereço"
                    style={Styles.form}
                    onChangeText={setEndereco}
                    value={endereco}
                    />
                </View>
                <View>
                    <Text>cpf:</Text>
                    <TextInput placeholder="Digite cpf"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                    onChangeText={setCpf}
                    value={cpf}
                    />
                </View>
                {(cpf == "" || email == "" || endereco == "" || senha == "" || celular == "" || nome == "") ? 
                (<TouchableOpacity onPress={()=> Inserir()}>
                    <Text>Concluir cadastro</Text>
                </TouchableOpacity>) :
                (<TouchableOpacity onPress={()=> Register()}>
                    <Text>Concluir cadastro</Text>
                </TouchableOpacity>)
            }
            </View>
        </KeyboardAvoidingView>
    );
}
