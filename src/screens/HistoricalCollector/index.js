import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"

export default function HistoricalCollector(){
    const [data, setData] = React.useState("Sem data")
    const [hora, setHora] = React.useState("Sem hora")
    const [status, setStatus] = React.useState("Sem status")
    const [pontos, setPontos] = React.useState(0)

    return(
        <View>
            <Text>Olá, Coletor</Text>
            <Text>Você não possui notificações</Text>
            <Text>Histórico</Text>
            <View>
                <View>
                    <Text>{data}</Text>
                    <Text>{hora}</Text>
                </View>
                <View>
                    <Icon name="home" size={30} color="black"/>
                    <Text>IFAL</Text>
                </View>
                <Text>{status}</Text>
                <View>
                    <View></View>
                    <TouchableOpacity><Text>Visualizar</Text></TouchableOpacity>
                    <View>
                        <Icon name="home" size={30} color="black"/>
                        <Text>{pontos}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}