import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { View, Text } from "react-native";
import firebase from "../../recursos/firebase";
import Icon from "react-native-vector-icons/FontAwesome"

export default function MainScreenUser({route}){
    const [pontos, setPontos] = React.useState(0)
    const [nome, setNome] = React.useState("semNome")
    const [papel, setPapel] = React.useState(false)
    const [vidro, setVidro] = React.useState(false)
    const [plastico, setPlastico] = React.useState(false)
    const [outros, setOutros] = React.useState(false)
    const auth = firebase.auth
    const [uid, setUid] = React.useState("")

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUid(user.uid)
            console.log(uid)
        }
    },[])

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

    return(
        <View>
            <Text>Olá, {nome}, uid {uid && uid}</Text>
            <View>
                <Text>Pontos</Text>
                <View>
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
