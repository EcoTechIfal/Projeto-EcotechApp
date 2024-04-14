import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"


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
                    <Icon name="map-pin" size={30} color="black"/>
                    <Text>IFAL</Text>
                </View>
                <Text>{status}</Text>
                <View>
                    <TouchableOpacity><Text  onPress={()=> navigation.replace("Comprovante de retirada")}>Visualizar</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}