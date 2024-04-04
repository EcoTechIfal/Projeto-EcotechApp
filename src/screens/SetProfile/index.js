import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default function SetProfile ({navigation}) {
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
                onChangeText={text => setNome(text)}
                value={Nome}
                />
            </View>
            <View>
                <Text>Celular:</Text>
                <TextInput placeholder="Digite o Numero de Celular" 
                onChangeText={text => setCelular(text)}
                value={Celular}
                keyboardType="numeric"
                />
            </View>
            <View>
                <Text> Email:</Text>
                <TextInput placeholder="Digite o Email"
                onChangeText={text => setEmail(text)}
                value={Email}
                />
            </View>
            <View>
                <Text>Senha:</Text>
                <TextInput placeholder="Digite a Senha"
                onChangeText={text => setEmail(text)}
                value={Senha}
                secureTextEntry={true}
                /> 
            </View>
            <View>
                <Text>Endereco:</Text>
                <TextInput placeholder=" Digite o Endereço"
                onChangeText={text => setEndereco(text)}
                value={Endereco}
                />
            </View>
            <View>
                <Text>Cpf:</Text>
                <TextInput placeholder="Digite Cpf"
                onChangeText={text => setCpf(text)}
                value={Cpf}
                />
            </View>
            <TouchableOpacity>
                <Text onPress={()=> navigation.navigate("Home")}>Salvar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
  );
}