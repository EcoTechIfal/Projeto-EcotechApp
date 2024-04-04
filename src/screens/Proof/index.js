import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Proof(){
    const [tipo, setTipo] = React.useState("nulo")
    const [pesoKg, setPesoKg] = React.useState("Sem peso")
    const [hora, setHora] = React.useState("Sem Hora")
    const [data, setData] = React.useState("Sem data")
    const [status, setStatus] = React.useState("nulo")
    const [endereco, setEndereco] = React.useState("Sem endereco")
    const [nome, setNome] = React.useState("Sem nome")

  return (
    <View>
        <View>
            <View>
                <Text>Tipo:</Text>
                <Text>{tipo}</Text>
            </View>
            <View>
                <Text>Quantidade:</Text>
                <Text>{pesoKg}</Text>
            </View>
            <View>
                <Text>Horário:</Text>
                <Text>{hora}</Text>
            </View>
            <View>
                <Text>Data:</Text>
                <Text>{data}</Text>
            </View>
        </View>
        <View>
            <Text>Status:</Text>
            <Text>{status}</Text>
        </View>
        <View>
            <Text>Endereço:</Text>
            <Text>{endereco}</Text>
        </View>
        <View>
            <Text>Nome:</Text>
            <Text>{nome}</Text>
        </View>
        <View>
            <TouchableOpacity><Text>Baixar em PDF</Text><Text>Icon</Text></TouchableOpacity>
            <TouchableOpacity><Text>Compartilhar</Text><Text>Icon</Text></TouchableOpacity>
        </View>
    </View>
  );
};
