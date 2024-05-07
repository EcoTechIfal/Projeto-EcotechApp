import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"
import Styles from "./style";
import { FlatList } from "react-native";

export default function HistoricalCollector({navigation, route}){
    const [pontos, setPontos] = React.useState(0)
    const [uid, setUid] = React.useState('')
    const [dados, setDados] = React.useState('')
    const [dadosEntrega, setDadosEntregas] = React.useState([])
    const [nome, setNome] = React.useState('')

    React.useEffect(() => {
        setUid(route.params.uid)
        setDados(route.params.dados)
        setDadosEntregas(route.params.dadosEntregas)
    },[])   

    return(
        <View style={Styles.container}>

        <Text style={Styles.hello}>Olá, usuário</Text>
        <Text style={Styles.historic}>Histórico</Text>
        
        <FlatList
        data={dadosEntrega}
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

                {item.status == 0 ? <Text style={[Styles.status, {backgroundColor: "red"}]} >Aguardando resposta</Text> : <Text style={[Styles.status, {backgroundColor: "#B0E9C1"}]}>Coletado</Text>}

                <View style={Styles.bottom}>
                    <TouchableOpacity onPress={()=> navigation.navigate("Comprovante de Entrega", {entrega: item, uid: uid, dados: dados} )} style={Styles.touch}>
                        <Text style={Styles.view}>Visualizar</Text>
                    </TouchableOpacity>

                    <View style={Styles.points}>
                        <Icon name="trophy" size={30} color="black"/>
                        <Text>pontos</Text>
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