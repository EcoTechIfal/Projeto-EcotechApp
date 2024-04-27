import React from "react";
import {Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome"
import crud from "../../recursos/crud";

export default function Profile({ navigation, route }) {
  const [nome, setNome] = React.useState("semNome");
  const [nomeUser, setNomeUser] = React.useState("semNome");
  const [cpf, setCpf] = React.useState("semNome");
  const [email, setEmail] = React.useState("semNome");
  const [senha, setSenha] = React.useState("semNome");
  const [endereco, setEndereco] = React.useState("semNome");
  const [celular, setCelular] = React.useState("semNome");
  const [dados, setDados] = React.useState([])
  const [uid, setUid] = React.useState('')
  const [image, setImage] = React.useState('')
  
  React.useEffect(()=>{
    setUid(route.params.uid)
    setDados(route.params.dados)
  },[])

  React.useEffect(()=>{
    if(dados != null){
        setNome(dados.nome)
        setNomeUser(dados.nomeUser)
        setCpf(dados.cpf)
        setEmail(dados.email)
        setSenha(dados.senha)
        setEndereco(dados.endereco)
        setCelular(dados.numero)
        setImage(dados.fotoUser)
    }
  }, [dados])

  return (
    <View style={styles.bloco}>
        <View style={styles.InfoPerfil}>
            <View>
                <View style={{ borderRadius:100, width:200, height:200, backgroundColor:"black"}}>
                    {image ? <Image style={{ borderRadius:100, width: "100%", height: "100%"}} source={{uri: `${image}?timestamp=${new Date().getTime()}`}} /> : <View></View>}
                </View>
            </View>
            <Text>{nomeUser}</Text>
        </View>

        <View style={styles.dataBloco}>

            <View style={styles.dados}>
                <Text style={styles.texto}>NOME COMPLETO:</Text>
                <Text style={styles.valor}>{nome}</Text>
            </View>

            <View style={styles.dados}>
                <Text style={styles.texto}>NOME DE USUÁRIO:</Text>
                <Text style={styles.valor}>{nomeUser}</Text>
            </View>            

            <View style={styles.dados}>
                <Text style={styles.texto}>CPF:</Text>
                <Text style={styles.valor}>{cpf}</Text>
            </View>

            <View style={styles.dados}>
                <Text style={styles.texto}>EMAIL:</Text>
                <Text style={styles.valor}>{email}</Text>
            </View>

            <View style={styles.dados}>
                <Text style={styles.texto}>ENDEREÇO:</Text>
                <Text style={styles.valor}>{endereco}</Text>
            </View>

            <View style={styles.dados}>
                <Text style={styles.texto}>CELULAR:</Text>
                <Text style={styles.valor}>{celular}</Text>
            </View>

      </View>

      <TouchableOpacity style={styles.button}>
        <Text onPress={() => navigation.navigate("Editar Perfil", {dados: dados, uid: uid})}>Modificar</Text>
      </TouchableOpacity>

    </View>
  );
}
