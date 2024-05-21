import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

import React from "react";
import crud from "../../recursos/crud";
import  {Picker} from '@react-native-picker/picker';

export default function ConfirmDelivery({navigation, route}){

    const [endereco, setEndereco] = React.useState('')
    const {nome, peso, horario, data, descricao, tipo} = route.params
    const uid = route.params.uid
    const dados = route.params.dados

    function ver(){
        endereco == "" ? alert("escolha o esdereco") : insertNewDel() 
    }
    function insertNewDel(){
        crud.insertEntregas({endereco ,nome, data, horario, peso, descricao, tipo, uid})
        //({enderecoDeEntrega, nome, data, horario, peso, descricao,material, uid
        alert("Entrega agendada")
        navigation.replace("HomeUser", {uid: uid, dados: dados})
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
          <Text>Endereço:</Text>
          <Picker
            selectedValue={endereco}
            onValueChange={setEndereco}
          >
            <Picker.Item label="Selecione o local de sua entrega" value="nulo" />
            <Picker.Item label="Ifal" value="Instituto Federal de Alagoas Campos SMC" />
            <Picker.Item label="Acamare" value="Acamare empresa de coleta de lixo" />
          </Picker>
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
                <Text onPress={()=> ver()}>Confirmar Entrega</Text>
            </TouchableOpacity>
        </View>
    )
}
