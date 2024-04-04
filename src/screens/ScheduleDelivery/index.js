import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet} from 'react-native';

export default function ScheduleDelivery() {
  const [quantidade, setQuantidade] = useState('');
  const [material, setMaterial] = useState('');


  return (
    <View>
      <Text>Quantidade (KG):</Text>
      <TextInput 
        onChangeText={setQuantidade}
        value={quantidade}
        keyboardType="numeric"
      />

       <Text>Descricao:</Text>
      <TextInput placeholder="ex: 14 garrafas"
      />

    <Text>Tipo de Material (KG):</Text>
      <Picker
        selectedValue={material}
        onValueChange={(itemValue) => setMaterial(itemValue)}
      >
        <Picker.Item label="Selecione o tipo de material" value="" />
        <Picker.Item label="Plástico" value="Plástico" />
        <Picker.Item label="Metal" value="Metal" />
        <Picker.Item label="Vidro" value="Vidro" />
        <Picker.Item label="Papelão" value="Papelão" />
      </Picker>

    <Text>Data de Entrega:</Text>
      <TextInput placeholder="ex: 00/00/00"
       keyboardType="numeric"
      />
    <Text>Hora</Text>
    </View>
  );
};