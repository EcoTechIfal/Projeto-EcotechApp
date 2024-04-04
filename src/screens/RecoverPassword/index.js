import React from "react";
import { Text, View, TextInput, KeyboardAvoidingView} from "react-native";
import { TouchableOpacity } from "react-native";

export default function RecoverPassword(){
    const [email, setEmail] = React.useState("")
    return(
        <KeyboardAvoidingView>
            <View>
                <View>
                    <Text>Esqueci minha senha</Text>
                    <Text>
                        Para redefinir a senha, informe o e-mail do usuário cadastrado na sua conta e lhe enviaremos um link com as instruções
                    </Text>
                </View>
                <View>
                    <Text>E-mail</Text>
                    <TextInput value="Email" placeholder="Digite seu e-mail" onChangeText={setEmail}/>
                </View>
                <TouchableOpacity><Text>ENVIAR</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}