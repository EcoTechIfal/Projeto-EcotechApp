import React from 'react';
import {TouchableOpacity, View, Text } from 'react-native';
import Styles from './style';

export default function Proof({navigation, route}){
    const [nome, setNome] = React.useState("Sem nome")
    const [entrega, setEntrega] = React.useState("Sem nome")


    React.useEffect(()=>{
        setNome(route.params.nome)
        setEntrega(route.params.entrega)
    })

  return (
    <View style={Styles.container}>
      <View >
        <View style={Styles.title}>

        </View>
        <View style={Styles.main}>
          <View style={Styles.partup}>
            <View>
              <Text style={Styles.type}>Tipo de Material:</Text>
              <Text style={Styles.set}>{entrega.tipo}</Text>
            </View>

            <View>
              <Text style={Styles.types}>Quantidade:</Text>
              <Text style={Styles.sets}>{entrega.quantidade}</Text>
            </View>
          </View>

          <View style={Styles.partdown}>
            <View>
              <Text style={Styles.type}>Horário:</Text>
              <Text style={Styles.set}>{entrega.horario}</Text>
            </View>

            <View>
              <Text style={Styles.type}>Data:</Text>
              <Text style={Styles.set}>{entrega.data}</Text>
            </View>
          </View>
        </View>
        {/* parte de baixo */}

        <View style={Styles.layer}>/
          <View style={Styles.status}>
            <Text style={Styles.type}>Status:</Text>
            {entrega.status == 0 ? <Text style={Styles.set}>Aguardando resposta</Text> : <Text style={Styles.set}> Coletado</Text>}
          </View>

          <View>
            <Text style={Styles.type}>Endereço:</Text>
            <Text style={Styles.set}>{entrega.endereco}</Text>
          </View>

          <View>
            <Text style={Styles.type}>Nome:</Text>
            <Text style={Styles.set}>{entrega.nome}</Text>
          </View>
        </View>
        <View style={Styles.line}></View>
      </View>

      <View style={Styles.botton}>
        <TouchableOpacity style={Styles.touch}>
          <Text style={Styles.texttouch}>Baixar em PDF</Text>
          <Text style={Styles.icon}>Icon</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.touch}>
          <Text style={Styles.texttouch}>Compartilhar</Text>
          <Text style={Styles.icon}>Icon</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
