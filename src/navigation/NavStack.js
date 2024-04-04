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
import ScheduleDelivery from "../screens/ScheduleDelivery"
import HistoricalUser from "../screens/HistoricalUser";
import HistoricalCollector from "../screens/HistoricalCollector";
import Proof from "../screens/Proof";
import Delivery from "../screens/Delivery";
import HomeTabs from "./HomeTabs";
import BottomNav from "./BottomNav";
import MainScreenCollector from "../screens/MainScreenCollector";


const Stack = createStackNavigator()

export default function NavStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tela de escolha">
                <Stack.Screen name="Tela de escolha" options={{ headerShown: false}} component={InitialScreen}/>
                <Stack.Screen name="Login Usuário" component={LoginUser}/>
                <Stack.Screen name="Cadastro Usuário" component={RegisterUser}/>
                <Stack.Screen name="Recuperar Senha" component={RecoverPassword}/>
                <Stack.Screen name="Login Coletor" component={LoginCollector}/>
                <Stack.Screen name="Patrocinadores" component={Sponsors}/>
                <Stack.Screen name="Perfil Usuário" component={Profile}/>
                <Stack.Screen name="Editar Perfil" component={SetProfile}/>
                <Stack.Screen name="Configuração" component={Configuration}/>
                <Stack.Screen name="Agentar entrega" component={ScheduleDelivery}/>
                <Stack.Screen name="Histórico" component={HistoricalUser}/>
                <Stack.Screen name="Histórico Coletor" component={HistoricalCollector}/>
                <Stack.Screen name="Comprovante de retirada" component={Proof}/>
                <Stack.Screen name="Entrega" component={Delivery}/>
                <Stack.Screen name="Home Coletor" component={MainScreenCollector}/>
                <Stack.Screen name="Home" component={BottomNav} options={{ headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}