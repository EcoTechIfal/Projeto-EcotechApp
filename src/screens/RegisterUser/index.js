import React, { useState } from 'react';
import { View, Text, TextInput, Picker, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Styles from "./style"
import firebase from '../../recursos/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import crud from '../../recursos/crud';

export default function RegisterUser({navigation}){

    const [nome, setNome] = useState('');
    const [nomeUser, setNomeUser] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cpf, setCpf] = useState('');
    
    const auth = firebase.auth;

    function Register(email, senha){
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid
        console.log('Usuário criado com sucesso!');
        Inserir(uid)
        navigation.replace("Home")
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
        crud.insert({cpf, email, endereco, nome, numero, user, uid})
    }
  
    return (
        
        <KeyboardAvoidingView>
            <View>
                <View>
                    <Text>Nome:</Text>
                    <TextInput placeholder="Digite o nome completo"
                    style={Styles.form}
                    onChangeText={text => setNome(text)}
                    value={nome}
                    />
                </View>
                <View>
                    <Text>Nome de Usuário:</Text>
                    <TextInput placeholder="Digite o nome completo"
                    style={Styles.form}
                    onChangeText={text => setNomeUser(text)}
                    value={nomeUser}
                    />
                </View>
                <View>
                    <Text>celular:</Text>
                    <TextInput placeholder="Digite o Numero de celular"
                    style={Styles.form}
                    onChangeText={text => setCelular(text)}
                    value={celular}
                    keyboardType="numeric"
                    />
                </View>
                <View>
                    <Text> email:</Text>
                    <TextInput placeholder="Digite o email"
                    style={Styles.form}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    />
                </View>
                <View>
                    <Text>senha:</Text>
                    <TextInput placeholder="Digite a senha"
                    style={Styles.form}
                    onChangeText={text => setSenha(text)}
                    value={senha}
                    secureTextEntry={true}
                    /> 
                </View>
                <View>
                    <Text>endereco:</Text>
                    <TextInput placeholder=" Digite o Endereço"
                    style={Styles.form}
                    onChangeText={text => setEndereco(text)}
                    value={endereco}
                    />
                </View>
                <View>
                    <Text>cpf:</Text>
                    <TextInput placeholder="Digite cpf"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                    onChangeText={text => setCpf(text)}
                    value={cpf}
                    />
                </View>
                {(cpf == "" || email == "" || endereco == "" || senha == "" || celular == "" || nome == "") ? 
                (<TouchableOpacity>
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
