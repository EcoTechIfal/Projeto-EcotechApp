import React from "react";
import { View, Text } from "react-native";



export default function MainScreenUser(){
    const [pontos, setPontos] = React.useState(0)
    const [nome, setNome] = React.useState("semNome")
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
    }function modalO(){
        setOutros(!outros)
    }

    return(
        <View>
            <Text>Olá, {nome}</Text>
            <View>
                <Text>Pontos</Text>
                <View>
                    <Text>icon</Text>
                    <Text>{pontos}</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>Papel</Text>
                    <Text onPress={()=> modalP()}>Icon</Text>
                    {papel && <DadosPapel/>}
                </View>
                <View>
                    <Text>Vidro</Text>
                    <Text onPress={()=> modalV()}>Icon</Text>
                    {vidro && <DadosVidro/>}
                </View>
                <View> 
                    <Text>Plástico</Text>
                    <Text onPress={()=> modalPlas()}>Icon</Text>
                    {plastico && <DadosPlastico/>}
                </View>
                <View>
                    <Text>Outros</Text>
                    <Text onPress={()=> modalO()}>Icon</Text>
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
