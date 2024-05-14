import React from 'react';
import {TouchableOpacity, View, Text } from 'react-native';
import Styles from './style';
import { Share } from 'react-native';
import * as Print from "expo-print"
import * as shareing from "expo-sharing"

export default function Proof({navigation, route}){
    const [nome, setNome] = React.useState("Sem nome")
    const [entrega, setEntrega] = React.useState("Sem nome")
    const data = "COmprovante do ecotech aí"

    React.useEffect(()=>{
        setNome(route.params.nome)
        setEntrega(route.params.entrega)
    })

    const htmlContent =`
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>
      <body style="text-align: center;">
        <img src='https://firebasestorage.googleapis.com/v0/b/ecotech-f0213.appspot.com/o/logos%2FEcotech%20logo.png?alt=media&token=94ac05e5-1a24-4b9c-ab94-a67e1a38066d' alt="">
        <h1 style="font-size: 20px; font-weight: bold; padding: 0 0 30px 0; ">
          Comprovante de entrega
        </h1>
        <div style="margin: 0 auto; width: 80%;">
            <section  style="display: flex; flex-wrap: wrap; gap: 30px;">
                <div style="width: 50%;" >
                    <p style="text-align: start;">Tipo de Material:</p>
                    <p style="font-weight: bold; text-align: start; font-size: 18px;">${entrega.tipo}</p>
                </div>
                <div style="width: 40%;">
                    <p style="text-align: start;">Quantidade:</p>
                    <p style="font-weight: bold; text-align: start; font-size: 18px;">${entrega.peso}</p>
                </div>
                <div style="width: 50%;">
                    <p style="text-align: start;">Horário:</p>
                    <p style="font-weight: bold;text-align: start; font-size: 18px;">${entrega.horario}</p>
                </div>
                <div style="width: 40%;" >
                    <p style="text-align: start;">Data</p>
                    <p style="font-weight: bold;text-align: start; font-size: 18px;">${entrega.data}</p>
                </div>
            </section>
            <section>
                <div style="margin: 40px 0 20px 0;">
                    <p style="text-align: start;">Status:</p>
                    <p style="font-weight: bold; text-align: start; font-size: 18px;">${entrega.status == 0 ? "Aguardando resposta" :  "Coletado"}</p>
                </div>
                <div style="margin:50px 0 50px 0;">
                    <p style="text-align: start;">Endereco:</p>
                    <p style="font-weight: bold; text-align: start; font-size: 18px;">${entrega.endereco}</p>
                </div>
                <div>
                    <p style="text-align: start;">Nome:</p>
                    <p style="font-weight: bold; text-align: start; font-size: 18px;">${nome}</p>
                </div>
            </section>
        </div>

      </body>
    </html>
  `;
  const print = async () => {
    // No iOS/Android imprime o HTML fornecido. Na web, imprime o HTML da página atual.
    try {
      const {uri} = await Print.printToFileAsync({
        html: htmlContent,
        name: "comprovante de entrega"
      });
      if(uri){
        await shareing.shareAsync(uri, {UTI: 'pdf', MimeType: 'application/pdf'} )
      }
    } catch (error) {
      console.error('Erro ao imprimir:', error);
    }
  };
  // Função para imprimir o HTML selecionado e salvá-lo como arquivo PDF
  const printToFile = async () => {
    // No iOS/Android imprime o HTML fornecido. Na web, imprime o HTML da página atual.
    console.log("tentando  gerar pdf")
    try{
      const { uri } = await Print.printToFileAsync(htmlContent);
      console.log('Arquivo foi salvo em:', uri);
      Share.share({message: 'Seu comprovante está pronto em pdf', url: uri})
     }catch(error){
      console.error(error)
     }
  };

  return (
    <View style={Styles.container}>
      <View>
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

        <View style={Styles.layer}>
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
        <TouchableOpacity  style={Styles.touch}>
          <Text style={Styles.texttouch}>Baixar em PDF</Text>
          <Text style={Styles.icon}>Icon</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.touch} onPress={()=> print()}>
          <Text style={Styles.texttouch}>Compartilhar</Text>
          <Text style={Styles.icon}>Icon</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

