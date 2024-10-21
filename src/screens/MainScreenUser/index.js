import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style'; // Importando o novo estilo

export default function MainScreenUser({ route }) {
  
  const [pontos, setPontos] = React.useState(0);
  const [nome, setNome] = React.useState('semNome');
  const [uid, setUid] = React.useState('');

  const [dados, setDados] = React.useState([]);
  // modais
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
    <View style={styles.container}>
      <View style={styles.abobora}>
        <Text style={styles.greeting}>
          Olá {nome}
        </Text>
      </View>
      <View style={styles.lulu}>
        <Text style={styles.pontos}>Pontos</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon style={styles.trofeu} name="trophy" size={30} color="black" />
          <Text style={styles.ponto2}>{pontos}</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.maça}>
          <View style={styles.mod}>
          <Text style={styles.papel}>Papel</Text>
          <Icon
            style={styles.papel2}
            onPress={() => modalP()}
            name="chevron-down"
            size={25}
            color="black"
          />
          </View>
          <View>
            {papel && <DadosPapel />}
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.mod}>
            <Text style={styles.vidro}>Vidro</Text>
            <Icon
            style={styles.vidro2}
            onPress={() => modalV()}
            name="chevron-down"
            size={25}
            color="black"
            />
          </View>
          <View>
            {vidro && <DadosVidro />}
          </View>
        </View>
        <View style={styles.mala}>
          <View style={styles.mod}> 
            <Text style={styles.platico}>Plástico</Text>
            <Icon
            style={styles.platico2}
            onPress={() => modalPlas()}
            name="chevron-down"
            size={25}
            color="black"
            />
          </View>
          <View>
            {plastico && <DadosPlastico />}
          </View>
        </View>
        <View style={styles.tiro}>
          <View style={styles.mod}>
            <Text style={styles.outros}>Outros</Text>
            <Icon
            style={styles.outros2}
            onPress={() => modalO()}
            name="chevron-down"
            size={25}
            color="black"
            />
          </View>
          <View >
          {outros && <DadosOutros />}
          </View>
        </View>
      </View>
    </View>
  );
}

function DadosPapel() {
  return <Text style={styles.textMod}>Meu nome é arthur, eu sou o desenvolvedor principal do app conhecido como Ecotech</Text>;
}
function DadosVidro() {
  return <Text style={styles.textMod}> O Vidro é insanamente insano</Text>;
}
function DadosPlastico() {
  return <Text style={styles.textMod}> O Plástico é insanamente insano</Text>;
}
function DadosOutros() {
  return <Text style={styles.textMod}> Os outros são insanamente insanos</Text>;
}
