import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function MainScreenCollector({navigation}){
    const [nome, setNome] = React.useState("")

    return (
        <View >
            <Text>Olá, {nome}</Text>
            <View >
                <TouchableOpacity>
                    <Text>Papel</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity>
                    <Text>Vidro</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity>
                    <Text>Plástico</Text>
                </TouchableOpacity>
            </View>
              <View >
                <TouchableOpacity>
                    <Text>Outros</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity>
                    <Text onPress={()=> navigation.navigate("Histórico Coletor")}>Ver pendencias</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
}