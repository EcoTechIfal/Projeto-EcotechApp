import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { View, Text } from 'react-native';
import firebase from '../../recursos/firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import crud from '../../recursos/crud';
import { buscarDados } from '../../funciotons/buscarDados';
import Styles from './style';

export default function MainScreenUser({ route }) {
  const auth = firebase.auth;
  const [pontos, setPontos] = React.useState(0);
  const [nome, setNome] = React.useState('semNome');
  const [uid, setUid] = React.useState('');

  const [dados, setDados] = React.useState([]);
  //modais
  const [papel, setPapel] = React.useState(false);
  const [vidro, setVidro] = React.useState(false);
  const [plastico, setPlastico] = React.useState(false);
  const [outros, setOutros] = React.useState(false);

  function modalP() {
    setPapel(!papel);
  }
  function modalPlas() {
    setPlastico(!plastico);
  }
  function modalV() {
    setVidro(!vidro);
  }
  function modalO() {
    setOutros(!outros);
  }

  React.useEffect(() => {
    setUid(route.params.uid);
    setDados(route.params.dados);
    if (dados != null) {
      setNome(dados.nomeUser);
      setPontos(dados.pontos);
    }
  }, [uid]);

  return (
    <View style={Styles.container}>
      <View style={Styles.abobora}>
        <Text style={Styles.greeting}>
          Olá {nome}, uid {uid && uid}
        </Text>
      </View>
      <View style={Styles.lulu}>
        <Text style={Styles.pontos}>Pontos</Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon style={Styles.trofeu} name="trophy" size={30} color="black" />
          <View style={Styles.jaca}>
            <Text style={Styles.ponto2}>{pontos}</Text>
          </View>
        </View>
      </View>
      <View style={Styles.container2}>
        <View style={Styles.maça}>
          <Text style={Styles.papel}>Papel</Text>
          <Icon
            style={Styles.papel2}
            onPress={() => modalP()}
            name="chevron-down"
            size={25}
            color="black"
          />
          {papel && <DadosPapel />}
        </View>
        <View style={Styles.button}>
          <Text style={Styles.vidro}>Vidro</Text>
          <Icon
            style={Styles.vidro2}
            onPress={() => modalV()}
            name="chevron-down"
            size={25}
            color="black"
          />
          {vidro && <DadosVidro />}
        </View>
        <View style={Styles.mala}>
          <Text style={Styles.platico}>Plástico</Text>
          <Icon
            style={Styles.platico2}
            onPress={() => modalPlas()}
            name="chevron-down"
            size={25}
            color="black"
          />
          {plastico && <DadosPlastico />}
        </View>
        <View style={Styles.tiro}>
          <Text style={Styles.outros}>Outros</Text>
          <Icon
            style={Styles.outros2}
            onPress={() => modalO()}
            name="chevron-down"
            size={25}
            color="black"
          />
          {outros && <DadosOutros />}
        </View>
      </View>
    </View>
  );
}

function DadosPapel() {
  return <Text> O Papel é insanamente insano</Text>;
}
function DadosVidro() {
  return <Text> O Vidro é insanamente insano</Text>;
}
function DadosPlastico() {
  return <Text> O Plástico é insanamente insano</Text>;
}
function DadosOutros() {
  return <Text> Os outros são insanamente insanos</Text>;
}
