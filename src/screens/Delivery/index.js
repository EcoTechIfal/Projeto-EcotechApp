import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

import React from "react";

export default function Delivery({navigation}){
    const [tipo, setTipo] = React.useState("nulo")
    const [quantidade, setQuantidade] = React.useState("sem quantidade")
    const [endereco, setEndereco] = React.useState("Sem endereco")
    const [pesoKg, setPesoKg] = React.useState("nego")
    const [data, setData] = React.useState("Sem data")
    const [hora, setHora] = React.useState("Sem hora")

    return(
        <View>
            <View>
                <Text>Tipo de Material</Text>
                <View>
                    <Icon name="home" size={30} color="black"/>
                    <Text>{tipo}</Text>
                </View>
                <Text>{quantidade}</Text>
            </View>
            <View>
                <Text>Endereço</Text>
                <Text>{endereco}</Text>
            </View>
            <View> 
                <View>
                    <Text>Peso</Text>
                    <View>
                        <Icon name="home" size={30} color="black"/>
                        <Text>{pesoKg}</Text>
                    </View>
                </View>
                <View>
                    <Text>Data da entrega</Text>
                    <View>
                        <Icon name="calendar" size={30} color="black"/>
                        <Text>{data}</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text>Hora para a entrega</Text>
                <Text>{hora}</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.replace("Home")}>
                <Text>Confirmar Entrega</Text>
            </TouchableOpacity>
        </View>
    )
}
