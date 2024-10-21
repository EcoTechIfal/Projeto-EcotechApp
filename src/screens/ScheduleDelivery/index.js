import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './style'; // Importando o arquivo de estilo

export default function ScheduleDelivery({ navigation, route }) {
  const [peso, setPeso] = useState('');
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [hora, setHora] = useState('');
  const [data, setData] = useState('');
  const [nome, setNome] = useState('');
  const [dados, setDados] = useState([]);
  const [uid, setUid] = useState('');

  useEffect(() => {
    setUid(route.params.uid);
    setNome(route.params.dados.nome);
    setDados(route.params.dados);
  }, []);

  function ver() {
    if (hora === '' || data === '' || tipo === 'nulo' || descricao === '' || peso === '') {
      alert('Preencha os dados');
    } else {
      navigation.navigate('Confirmar Entrega', {
        uid: uid,
        dados: dados,
        nome: nome,
        peso: peso,
        horario: hora,
        data: data,
        descricao: descricao,
        tipo: tipo,
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Peso (KG):</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setPeso}
          value={peso}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição:</Text>
        <TextInput 
          style={styles.input}
          placeholder="ex: 14 garrafas" 
          onChangeText={setDescricao} 
          value={descricao}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tipo de Material:</Text>
        <Picker
          selectedValue={tipo}
          onValueChange={setTipo}
          style={styles.picker}
        >
          <Picker.Item label="Selecione o tipo de material" value="nulo" />
          <Picker.Item label="Plástico" value="Plástico" />
          <Picker.Item label="Metal" value="Metal" />
          <Picker.Item label="Vidro" value="Vidro" />
          <Picker.Item label="Papelão" value="Papelão" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Entrega:</Text>
        <TextInput 
          style={styles.input}
          placeholder="ex: 00/00/00" 
          onChangeText={setData} 
          value={data}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hora:</Text>
        <TextInput 
          style={styles.input}
          placeholder="ex: 12:00 às 13:00" 
          onChangeText={setHora} 
          value={hora}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => ver()}>
        <Text style={styles.buttonText}>Agendar</Text>
      </TouchableOpacity>
    </View>
  );
}
