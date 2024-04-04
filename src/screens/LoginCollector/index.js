

import React from "react";
import { View, Text, Button, TouchableOpacity, KeyboardAvoidingView,TextInput } from "react-native";
import Styles from "./style";

export default function LoginCollector({navigation}){
    const [email, setEmail] = React.useState("")
    const [senha, setSenha] = React.useState("")

    return(
        <KeyboardAvoidingView>
            
            <View>
                <View>
                    <Text>Email</Text>
                    <TextInput value={email} placeholder="Email" onChangeText={setEmail}/>
                </View>
                <View>
                    <Text>Senha</Text>
                    <TextInput value={senha} secureTextEntry={true} placeholder="Senha" onChangeText={setSenha}/>
                </View>
                <TouchableOpacity>
                    <Text style={Styles.link} onPress={()=> navigation.navigate("Recuperar Senha")}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text onPress={()=> navigation.replace("Home Coletor")}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}
