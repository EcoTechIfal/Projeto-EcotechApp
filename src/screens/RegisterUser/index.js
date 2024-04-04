import React, { useState } from 'react';
import { View, Text, TextInput, Picker, KeyboardAvoidingView} from 'react-native';
import Styles from "./style"
import { TouchableOpacity } from 'react-native-web';

export default function RegisterUser(){

    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Celular, setCelular] = useState('');
    const [Senha, setSenha] = useState('');
    const [Endereco, setEndereco] = useState('');
    const [Cpf, setCpf] = useState('');
  
  
    return (
        
        <KeyboardAvoidingView>
            <View>
                <Text>Nome:</Text>
                <TextInput placeholder="Digite o Nome completo"
                style={Styles.form}
                onChangeText={text => setNome(text)}
                value={Nome}
                />
            </View>
            <View>
                <Text>Celular:</Text>
                <TextInput placeholder="Digite o Numero de Celular"
                style={Styles.form}
                onChangeText={text => setCelular(text)}
                value={Celular}
                keyboardType="numeric"
                />
            </View>
            <View>
                <Text> Email:</Text>
                <TextInput placeholder="Digite o Email"
                style={Styles.form}
                onChangeText={text => setEmail(text)}
                value={Email}
                />
            </View>
            <View>
                <Text>Senha:</Text>
                <TextInput placeholder="Digite a Senha"
                style={Styles.form}
                onChangeText={text => setEmail(text)}
                value={Senha}
                secureTextEntry={true}
                /> 
            </View>
            <View>
                <Text>Endereco:</Text>
                <TextInput placeholder=" Digite o Endereço"
                style={Styles.form}
                onChangeText={text => setEndereco(text)}
                value={Endereco}
                />
            </View>
            <View>
                <Text>Cpf:</Text>
                <TextInput placeholder="Digite Cpf"
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setCpf(text)}
                value={Cpf}
                />
            </View>
            <TouchableOpacity>
                <Text>Concluir cadastro</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}
