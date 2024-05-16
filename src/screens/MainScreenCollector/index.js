import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './style';

export default function MainScreenCollector({ navigation, route }) {
  const [nome, setNome] = React.useState('');
  const [uid, setUid] = React.useState('');
  const [dados, setDados] = React.useState([]);

  React.useEffect(() => {
    setUid(route.params.uid);
    setDados(route.params.dados);
    setNome(route.params.dados.nomeUser);
  }, []);

  return (
    <View style={Styles.container}>
      <View style={Styles.geral}>
        <Text style={Styles.greeting}>Olá, {nome}</Text>
      </View>
      <View style={Styles.maça}>
        <TouchableOpacity>
          <Text style={Styles.papel}>Papel</Text>
          <Icon
            style={Styles.setinha1}
            onPress={() => modalP()}
            name="chevron-down"
            size={25}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.button}>
        <TouchableOpacity style={Styles.mamão}>
          <Text style={Styles.vidro}>Vidro</Text>
          <Icon
            style={Styles.setinha2}
            onPress={() => modalP()}
            name="chevron-down"
            size={25}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.mala}>
        <TouchableOpacity style={Styles.massa}>
          <Text style={Styles.plastico}>Plástico</Text>
          <Icon
            style={Styles.setinha3}
            onPress={() => modalP()}
            name="chevron-down"
            size={25}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.tiro}>
        <TouchableOpacity style={Styles.kilo}>
          <Text style={Styles.outros1}>Outros</Text>
          <Icon
            style={Styles.setinha4}
            onPress={() => modalP()}
            name="chevron-down"
            size={25}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.etario}>
        <TouchableOpacity style={Styles.barril}>
          <Text
            onPress={() =>
              navigation.navigate('Histórico Coletor', { uid: uid })
            }
            style={Styles.pendencias}
          >
            Ver pendencias
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
