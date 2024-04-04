import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Profile({navigation}){
    const [nome, setNome] = React.useState("semNome")
    const [cpf, setCpf] = React.useState("semNome")
    const [email,setEmail] = React.useState("semNome")
    const [senha,setSenha] = React.useState("semNome")
    const [endereco, setEndereco] = React.useState("semNome")
    const [celular, setCelular] = React.useState("semNome")
    return(
        <View>
            <View>
                <Text>Image</Text>
                <Text>{nome}</Text>
            </View>
            <View>
                <View>
                    <Text>NOME COMPLETO</Text>
                    <Text>{nome}</Text>
                </View>    
                <View>
                    <Text>CPF</Text>
                    <Text>{cpf}</Text>
                </View>
                <View>
                    <Text>EMAIL</Text>
                    <Text>{email}</Text>
                </View>
                <View>
                    <Text>SENHA</Text>
                    <Text>{senha}</Text>
                </View>
                <View>
                    <Text>ENDEREÇO</Text>
                    <Text>{endereco}</Text>
                </View>
                <View>
                    <Text>CELULAR</Text>
                    <Text>{celular}</Text>
                </View>
            </View> 
            <TouchableOpacity>
                <Text onPress={()=> navigation.navigate("Editar Perfil")}>Modificar</Text>
            </TouchableOpacity>
        </View>
    )
}