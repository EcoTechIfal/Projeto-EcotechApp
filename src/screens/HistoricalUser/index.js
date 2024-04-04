import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HistoricalUser({navigation}){
    const [nome, setNome] = React.useState("Sem nome")
    const [data, setData] = React.useState("Sem data")
    const [hora, setHora] = React.useState("Sem hora")
    const [status, setStatus] = React.useState("Sem status")
    const [pontos, setPontos] = React.useState(0)

    return(
        <View>
            <Text>Olá, {nome}</Text>
            <Text>Você não possui notificações</Text>
            <Text>Histórico</Text>
            <View>
                <View>
                    <Text>{data}</Text>
                    <Text>{hora}</Text>
                </View>
                <View>
                    <Text>Icon</Text>
                    <Text>IFAL</Text>
                </View>
                <Text>{status}</Text>
                <View>
                    <View></View>
                    <TouchableOpacity><Text  onPress={()=> navigation.replace("Comprovante de retirada")}>Visualizar</Text></TouchableOpacity>
                    <View>
                        <Text>Icon</Text>
                        <Text>{pontos}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}