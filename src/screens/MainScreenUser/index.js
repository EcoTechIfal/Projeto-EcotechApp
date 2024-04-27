import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { View, Text } from "react-native";
import firebase from "../../recursos/firebase";
import Icon from "react-native-vector-icons/FontAwesome"
import crud from "../../recursos/crud";
import { buscarDados } from "../../funciotons/buscarDados";

export default function MainScreenUser({route}){
    const auth = firebase.auth
    const [pontos, setPontos] = React.useState(0)
    const [nome, setNome] = React.useState("semNome")
    const [uid, setUid] = React.useState("")

    const [dados, setDados] = React.useState([])
    //modais
    const [papel, setPapel] = React.useState(false)
    const [vidro, setVidro] = React.useState(false)
    const [plastico, setPlastico] = React.useState(false)
    const [outros, setOutros] = React.useState(false)


    
    function modalP(){
        setPapel(!papel)
    }
    function modalPlas(){
        setPlastico(!plastico)
    }
    function modalV(){
        setVidro(!vidro)
    }
    function modalO(){
        setOutros(!outros)
    }

    React.useEffect(() => {   
        setUid(route.params.uid)
        setDados(route.params.dados)
        if(dados != null){
            setNome(dados.nomeUser)
            setPontos(dados.pontos)
        }
    }, [uid]); 
    
    return(
        <View>
            <Text>Olá {nome}, uid {uid && uid}</Text>
            <View>
                <Text>Pontos</Text>
                <View style={{flexDirection: "row"}}>
                    <Icon name="trophy" size={30} color="black"/>
                    <Text>{pontos}</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>Papel</Text>
                    <Icon onPress={()=> modalP()} name="chevron-down" size={30} color="black"/>
                    {papel && <DadosPapel/>}
                </View>
                <View>
                    <Text>Vidro</Text>
                    <Icon onPress={()=> modalV()} name="chevron-down" size={30} color="black"/>
                    {vidro && <DadosVidro/>}
                </View>
                <View> 
                    <Text>Plástico</Text>
                    <Icon onPress={()=> modalPlas()} name="chevron-down" size={30} color="black"/>
                    {plastico && <DadosPlastico/>}
                </View>
                <View>
                    <Text>Outros</Text>
                    <Icon onPress={()=> modalO()} name="chevron-down" size={30} color="black"/>
                    {outros && <DadosOutros/>}
                </View>
            </View>
        </View>
    )
}

function DadosPapel(){
    return(
        <Text> O Papel é insanamente insano</Text>
    )
}
function DadosVidro(){
    return(
        <Text> O Vidro é insanamente insano</Text>
    )
}
function DadosPlastico(){
    return(
        <Text> O Plástico é insanamente insano</Text>
    )
}
function DadosOutros(){
    return(
        <Text> Os outros são insanamente insanos</Text>
    )
}
