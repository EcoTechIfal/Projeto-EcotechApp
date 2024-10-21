import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style'; // Importando o novo estilo
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Points({ route }) {
  const [pontos, setPontos] = React.useState(0);
  const [quantidade, setQuantidade] = React.useState(0);
  const [uid, setUid] = React.useState('');
  const [dados, setDados] = React.useState([]);

  React.useEffect(() => {
    setUid(route.params.uid);
    setDados(route.params.dados);
    if (dados != null) {
      setPontos(dados.pontos);
    }
  }, [uid]);

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.pontos}>Você tem {pontos} pontos</Text>
        <Text style={styles.text}>
          Solicite a troca dos seus Pontos e ganhe benefícios e descontos
          exclusivos!
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => alert('Botao 1')}>
        <Text style={styles.buttonText}>Solicitar Comprovante</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('Botao 2')}>
        <Text style={styles.buttonText}>Como funcionam os pontos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('Botao 3')}>
        <Text style={styles.buttonText}>Locais de Entrega</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('Botao 4')}>
        <Text style={styles.buttonText}>Convide Amigos</Text>
      </TouchableOpacity>

      <View style={styles.caixa}>
        <Icon style={styles.peso} name="star" size={40} color="black" />
        <View>
          <Text style={styles.total}>Peso total</Text>
          <Text style={styles.atual}>
            Até agora você atingiu {quantidade} Kg de resíduos
          </Text>
        </View>
      </View>
    </View>
  );
}
