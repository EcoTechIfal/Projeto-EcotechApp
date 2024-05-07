import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginUser from "../screens/LoginUser"
import LoginCollector from "../screens/LoginCollector"
import RegisterUser from "../screens/RegisterUser"
import RecoverPassword from "../screens/RecoverPassword"
import InitialScreen from "../screens/InitialScreen"
import Sponsors from "../screens/Sponsors"
import Profile from "../screens/Profile"
import SetProfile from "../screens/SetProfile"
import Configuration from "../screens/Configuration";
import HistoricalUser from "../screens/HistoricalUser";
import HistoricalCollector from "../screens/HistoricalCollector";
import Proof from "../screens/Proof";
import ConfirmDelivery from "../screens/ConfirmDelivery";
import BottomNavUser from "./BottomNavUser";
import MainScreenCollector from "../screens/MainScreenCollector";
import BottomNavCollector from "./BottomNavColllector";
import DetailsDelivery from "../screens/DetailsDelivery";


const Stack = createStackNavigator()

export default function NavStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tela de escolha">
                <Stack.Screen name="Tela de escolha" options={{ headerShown: false}} component={InitialScreen}/>
                <Stack.Screen name="Login Usuário" component={LoginUser} options={{ headerShown: false}}/>
                <Stack.Screen name="Cadastro Usuário" component={RegisterUser}/>
                <Stack.Screen name="Recuperar Senha" component={RecoverPassword}/>
                <Stack.Screen name="Login Coletor" component={LoginCollector}/>
                <Stack.Screen name="Patrocinadores" component={Sponsors}/>
                <Stack.Screen name="Perfil Usuário" component={Profile}/>
                <Stack.Screen name="Editar Perfil" component={SetProfile}/>
                <Stack.Screen name="Configuração" component={Configuration}/>
                <Stack.Screen name="Histórico de Entregas" component={HistoricalUser}/>
                <Stack.Screen name="Histórico de Coletas" component={HistoricalCollector}/>
                <Stack.Screen name="Comprovante de Entrega" component={Proof}/>
                <Stack.Screen name="Confirmar Entrega" component={ConfirmDelivery}/>
                <Stack.Screen name="Home Coletor" component={MainScreenCollector}/>
                <Stack.Screen name="HomeUser" component={BottomNavUser} options={{ headerShown: false}} />
                <Stack.Screen name="HomeCollector" component={BottomNavCollector} options={{ headerShown: false}} />
                <Stack.Screen name="Detalhes de Coletar" component={DetailsDelivery} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}