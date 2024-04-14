import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Styles from './style';
import Icon from "react-native-vector-icons/FontAwesome"

export default function Points ()  {
  const [pontos, setPontos] = React.useState(0)
  const [quantidade, setQuantidade] = React.useState(0)

  return (

    <View>
        <View>
            <Text>Você tem {pontos} pontos</Text>
            <Text>Solicite a troca dos seus Pontos e ganhe benefícios e descontos exclusivos!</Text>
        </View>
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
        <View>
            <Icon name="star" size={30} color="black"/>
            <View>
                <Text>Paso total</Text>
                <Text>Até agora você atingiu {quantidade} Kg de resíduos</Text>
            </View>
        </View>
    </View>
  );
};