import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Styles from './style';

export default function Points ()  {
 
  return (

    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.button}
        onPress={('Botao 1')}
      >
        <Text style={Styles.buttonText}>Solicitar Comprovante</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.button}
        onPress={('Botao 2')}
      >
        <Text style={Styles.buttonText}>Como funcionam os pontos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.button}
        onPress={('Botao 3')}
      >
        <Text style={Styles.buttonText}>Locais de Entrega</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.button}
        onPress={('Botao 4')}
      >
        <Text style={Styles.buttonText}>Convide Amigos</Text>
      </TouchableOpacity>
    </View>
  );
};