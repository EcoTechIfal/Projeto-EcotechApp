import React, { useState } from 'react';
import {Image, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import firebase from '../../recursos/firebase';
import * as ImagePicker from "expo-image-picker"
import {getDownloadURL, ref, uploadBytes} from "firebase/storage"
import Styles from './style';
import { ScrollView } from 'react-native-gesture-handler';
import crud from '../../recursos/crud';

export default function SetProfile ({navigation, route}) {
  const [nome, setNome] = useState('');
  const [nomeUser, setNomeUser] = useState('');
  const [celular, setCelular] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cpf, setCpf] = useState('');
  const [image, setImage] = useState('')
  const dados = route.params.dados
  const uid = route.params.uid

  const Storage = firebase.storage



  React.useEffect(()=>{
    if(dados != null){
        setNome(dados.nome)
        setCpf(dados.cpf)
        setEndereco(dados.endereco)
        setCelular(dados.numero)
        setNomeUser(dados.nomeUser)
        setImage(dados.fotoUser)
    }
  }, [dados])

  
  const permissao = async ()=>{
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') { 
        alert('Desculpe, precisamos de permissão para acessar a galeria de imagens.');
    }
}

const pegarImagem = async () => {
    await permissao()

    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 3],
        quality: 1,
    })
    setImage(result.assets[0].uri)
}

const uploadImagem = async (uri) =>{
    try{
        const lugarStorage = ref(Storage, `FotosdeUsuario/${uid}`)
        const resp = await fetch(uri);
        const blob = await resp.blob();

        await uploadBytes(lugarStorage, blob, { contentType: 'image/jpeg' })

        const url = await getDownloadURL(lugarStorage)
        if(url){
            setImage(url)
            console.log(url)
            EnvairUrl()
        }
    }catch (error){
        console.error("error ao upar a imagem",error)
    }
}

  const EnvairUrl = async ()=>{
    const {email, pontos, funcao,  id} = dados
    console.log("a url da image que vai ser upada", image)
    const Newdata = {
        cpf: cpf,
        email: email,
        endereco: endereco,
        fotoUser: image,
        funcao: funcao,
        nome: nome,
        numero: celular,
        pontos: pontos,
        nomeUser: nomeUser,
        userId: uid
    }
    await crud.UpdateUser({idDoc: id, dataUp:Newdata})
    navigation.navigate("HomeUser", {dados:dados, uid:uid})
  }

  return (
    <KeyboardAvoidingView style={Styles.container} behavior='padding'>
            <View>
                 <View>
                    <TouchableOpacity  style={Styles.fotoPerfil}>
                        {image ? <Image style={{ borderRadius:100, width: "100%", height: "100%"}} source={{uri: image}} /> : <View></View>}
                        <Icon style={Styles.Camera} onPress={()=> pegarImagem()} name="camera" size={30} color="black"/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
            <View style={Styles.informacao}>
                <Text>Nome:</Text>
                <TextInput style={Styles.dados} placeholder="Digite o Nome completo"
                onChangeText={setNome}
                value={nome}
                />
            </View>
            <View style={Styles.informacao}>
                <Text>Nome de Usuário:</Text>
                <TextInput style={Styles.dados} placeholder="Digite o Nome de Usuário"
                onChangeText={setNomeUser}
                value={nomeUser}
                />
            </View>
            <View style={Styles.informacao}>
                <Text>Celular:</Text>
                <TextInput style={Styles.dados} placeholder="Digite o Numero de Celular" 
                onChangeText={setCelular}
                value={celular}
                keyboardType="numeric"
                />
            </View>
            <View style={Styles.informacao}>
                <Text>Endereco:</Text>
                <TextInput style={Styles.dados} placeholder=" Digite o Endereço"
                onChangeText={setEndereco}
                value={endereco}
                />
            </View>
            <View style={Styles.informacao}>
                <Text>Cpf:</Text>
                <TextInput style={Styles.dados} placeholder="Digite Cpf"
                onChangeText={setCpf}
                value={cpf}
                />
            </View>
            </ScrollView>
            <TouchableOpacity  style={Styles.bottom} >
                <Text onPress={()=> ver()}>Salvar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
  );

  function ver(){
    cpf == "" || celular =="" || endereco =="" || nome == "" || nomeUser == "" ?  alert("preencha todos os dados")  : uploadImagem(image)
    }
}


