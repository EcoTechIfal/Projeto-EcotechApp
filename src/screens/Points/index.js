import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { onAuthStateChanged } from 'firebase/auth';
import firebase from '../../recursos/firebase';

export default function Points({ route }) {
  const [pontos, setPontos] = React.useState(0);
  const [quantidade, setQuantidade] = React.useState(0);
  const [uid, setUid] = React.useState('');
  const [dados, setDados] = React.useState([]);

  const auth = firebase.auth;

  React.useEffect(() => {
    setUid(route.params.uid);
    setDados(route.params.dados);
    if (dados != null) {
      setPontos(dados.pontos);
    }
  }, [uid]);

  return (
    <View tyle={Styles.container}>
      <View style={Styles.container2}>
        <Text style={Styles.pontos}>Você tem {pontos} pontos</Text>
        <Text style={Styles.text}>
          Solicite a troca dos seus Pontos e ganhe benefícios e descontos
          exclusivos!
        </Text>
      </View>

      <TouchableOpacity style={Styles.button} onPress={'Botao 1'}>
        <Text style={Styles.buttonText}>Solicitar Comprovante</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.button} onPress={'Botao 2'}>
        <Text style={Styles.buttonText}>Como funcionam os pontos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.button} onPress={'Botao 3'}>
        <Text style={Styles.buttonText}>Locais de Entrega</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.button} onPress={'Botao 4'}>
        <Text style={Styles.buttonText}>Convide Amigos</Text>
      </TouchableOpacity>

      <View style={Styles.caixa}>
        <Icon style={Styles.peso} name="star" size={40} color="black" />
        <View>
          <Text style={Styles.total}>Peso total</Text>
          <Text style={Styles.atual}>
            Até agora você atingiu {quantidade} Kg de resíduos
          </Text>
        </View>
      </View>
    </View>
  );
}
