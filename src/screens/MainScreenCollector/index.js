import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"
import { setUpTests } from "react-native-reanimated";

export default function MainScreenCollector({navigation, route}){
    const [nome, setNome] = React.useState("")
    const [uid, setUid] = React.useState('')
    const [dados, setDados] = React.useState([])

    React.useEffect(()=>{
        setUid(route.params.uid)
        setDados(route.params.dados)
        setNome(route.params.dados.nomeUser)
    },[])

    return (
        <View >
            <Text>Olá, {nome}</Text>
            <View >
                <TouchableOpacity>
                    <Text>Papel</Text>
                    <Icon onPress={()=> modalP()} name="chevron-down" size={30} color="black"/>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity>
                    <Text>Vidro</Text>
                    <Icon onPress={()=> modalP()} name="chevron-down" size={30} color="black"/>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity>
                    <Text>Plástico</Text>
                    <Icon onPress={()=> modalP()} name="chevron-down" size={30} color="black"/>
                </TouchableOpacity>
            </View>
              <View >
                <TouchableOpacity>
                    <Text>Outros</Text>
                    <Icon onPress={()=> modalP()} name="chevron-down" size={30} color="black"/>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity>
                    <Text onPress={()=> navigation.navigate("Histórico Coletor",{uid: uid})}>Ver pendencias</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
}