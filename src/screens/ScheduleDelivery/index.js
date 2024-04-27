import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { onAuthStateChanged } from "firebase/auth";
import firebase from '../../recursos/firebase';
import { TouchableOpacity } from 'react-native';
import  {Picker} from '@react-native-picker/picker';

export default function ScheduleDelivery({navigation, route}) {
  const [peso, setPeso] = useState('');
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState("")
  const [hora, setHora] = useState("")
  const [data, setData] = useState("")
  const [nome, setNome] = useState('')
  const [dados, setDados] = useState([])

  const [uid, setUid] = useState('')

  React.useEffect(()=>{
    setUid(route.params.uid)
    setNome(route.params.dados.nome)
    setDados(route.params.dados)
  },[])

  return (
    <View>
      <View>
        <View>
          <Text>Peso (KG):</Text>
          <TextInput 
            onChangeText={setPeso}
            value={peso}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text>Descricao:</Text>
          <TextInput placeholder="ex: 14 garrafas" onChangeText={setDescricao} value={descricao}/>
        </View>
        <View>
          <Text>Tipo de Material (KG):</Text>
          <Picker
            selectedValue={tipo}
            onValueChange={setTipo}
          >
            <Picker.Item label="Selecione o tipo de material" value="" />
            <Picker.Item label="Plástico" value="Plástico" />
            <Picker.Item label="Metal" value="Metal" />
            <Picker.Item label="Vidro" value="Vidro" />
            <Picker.Item label="Papelão" value="Papelão" />
          </Picker>
        </View>
        <View>
          <Text>Data de Entrega:</Text>
          <TextInput placeholder="ex: 00/00/00" onChangeText={setData} value={data}/>
        </View>
        <View>
          <Text>Hora</Text>
          <TextInput placeholder='ex: 12:00 às 13:00' onChangeText={setHora} value={hora}/>
        </View>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate("Confirmar Entrega", {uid: uid, dados: dados, nome: nome, peso: peso, horario: hora, data: data, descricao: descricao, tipo: tipo})}><Text>Agendar</Text></TouchableOpacity>
    </View>
  );
};