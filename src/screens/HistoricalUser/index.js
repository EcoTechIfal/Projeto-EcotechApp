import { FlatList, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"


export default function HistoricalUser({navigation, route}){

    const dados = route.params.dados
    const uid = route.params.uid
    const dadosColetas = route.params.dadosColetas

    return(
        <View>
            <Text>Olá, {dados.nomeUser}</Text>
            <Text>Histórico</Text>
        
            <FlatList
        data={dadosColetas}
        renderItem={({item}) =>{
          return(  
            <View>
                <View style={Styles.line}></View>

                <View>
                    <View style={Styles.blockstatus}>
                        <Text style={Styles.date}>{item.data}</Text>
                        <Text style={Styles.time}>{item.horario}</Text>
                    </View>

                    <View style={Styles.icons}>
                        <Icon name="map-pin" size={20} color="black"/>
                        <Text style={Styles.ifal}>IFAL</Text>
                    </View>

                {item.status == 0 ? <Text style={[Styles.status, {backgroundColor: "red"}]} >Aguardando Entrega</Text> : <Text style={[Styles.status, {backgroundColor: "#B0E9C1"}]}>Entrega Completa</Text>}
                <View style={Styles.bottom}>
                    <TouchableOpacity onPress={()=> navigation.navigate("Detalhes de Coletar", {entrega: item, nome: dados.nome, uid: uid, dados: dados} )} style={Styles.touch}>
                        <Text style={Styles.view}>Visualizar</Text>
                    </TouchableOpacity>

                    <View style={Styles.points}>
                        <Icon name="trophy" size={30} color="black"/>
                        <Text>{pontos}</Text>
                    </View>
                </View>
                </View>

                <View style={Styles.line}></View>        
            </View>
          )  
        }}
        KeyExtractor={(item)=> item.id}/>    
                
        </View>
    )
}