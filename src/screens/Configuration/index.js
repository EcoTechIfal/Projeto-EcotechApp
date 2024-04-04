import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

export default function Configuration({navigation}){
    const [nome, setNome] = React.useState("Sem nome")

    return(
        <View>
            <View>
                <Text>Image</Text>
                <View>
                    <Text>{nome}</Text>
                    <Text>Usuário</Text>
                    <TouchableOpacity><Text onPress={()=> navigation.navigate("Perfil Usuário")}>Editar perfil</Text></TouchableOpacity>
                </View>
            </View>
            <View>
                <View>
                    <Text>Icon</Text>
                    <Text>Convidar amigos</Text>
                </View>
                <View>
                    <Text>Icon</Text>
                    <Text onPress={()=> navigation.navigate("Histórico")}>Histórico de entregas</Text>
                </View>
            </View>
            <TouchableOpacity><Text>Icon</Text><Text>Sair</Text></TouchableOpacity>
        </View>
    )
}