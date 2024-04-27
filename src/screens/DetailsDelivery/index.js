import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

import React from "react";
import crud from "../../recursos/crud";

export default function DetailsDelivery({navigation, route}){

    const {peso, horario, data, descricao, tipo, endereco, id} = route.params.entrega
    const nome = route.params.nome
    const uid = route.params.uid
    const dados = route.params.dados
    
    async function mudarStatus(){
        const pesoCompleto = peso + " Kg"

        const dataUp = {
        usuario: nome,
        data: data,
        endereco: endereco,
        horario: horario,
        peso: pesoCompleto,
        descricao: descricao,
        status: 1,
        tipo: tipo,
        userId: uid
    }

        await crud.UpdateDelivery({idDoc: id, dataUp: dataUp})
        navigation.navigate("Configuração", {uid: uid, dados: dados})
    }
    
    async function deletarEntrega(){
        await crud.DeleteDelivery({idDoc: id})
        navigation.navigate("Configuração", {uid: uid, dados: dados})
    }

    return(
        <View>
            <View>
                <Text>Tipo de Material</Text>
                <View>
                    <Icon name="home" size={30} color="black"/>
                    <Text>{tipo}</Text>
                </View>
                <Text>{descricao}</Text>
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
                        <Text>{peso}</Text>
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
                <Text>{horario}</Text>
            </View>
            <TouchableOpacity>
                <Text onPress={()=> mudarStatus()}>Finalizar entrega</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text onPress={()=> deletarEntrega()}>Apagar entrega</Text>
            </TouchableOpacity>
        </View>
    )
}
