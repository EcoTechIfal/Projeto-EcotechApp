import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome"

export default function Profile({ navigation }) {
  const [nome, setNome] = React.useState("semNome");
  const [cpf, setCpf] = React.useState("semNome");
  const [email, setEmail] = React.useState("semNome");
  const [senha, setSenha] = React.useState("semNome");
  const [endereco, setEndereco] = React.useState("semNome");
  const [celular, setCelular] = React.useState("semNome");
  

  return (
    <View style={styles.bloco}>
        <View style={styles.InfoPerfil}>
            <View>
                <Text>Image</Text>
                <Icon name="camera" size={30} color="black"/>
            </View>
            <Text>{nome}</Text>
        </View>

        <View style={styles.dataBloco}>

            <View style={styles.dados}>
                <Text style={styles.texto}>NOME COMPLETO:</Text>
                <Text style={styles.valor}>{nome}</Text>
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
                <Text style={styles.texto}>SENHA:</Text>
                <Text style={styles.valor}>{senha}</Text>
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
        <Text onPress={() => navigation.navigate("Editar Perfil")}>Modificar</Text>
      </TouchableOpacity>

    </View>
  );
}
