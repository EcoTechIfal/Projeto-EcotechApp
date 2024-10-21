import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login"
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
import BottomNavCollector from "./BottomNavColllector";
import DetailsDelivery from "../screens/DetailsDelivery";


const Stack = createStackNavigator()

export default function NavStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tela de escolha">
                <Stack.Screen name="Tela de escolha" options={{ headerShown: false}} component={InitialScreen}/>
                <Stack.Screen name="Login Usuário" component={Login} options={{ headerShown: false}}/>
                <Stack.Screen name="Cadastro Usuário" component={RegisterUser}/>
                <Stack.Screen name="Recuperar Senha" component={RecoverPassword}/>
                <Stack.Screen name="Patrocinadores" component={Sponsors} options={{headerStyle: {backgroundColor: "#B0E9C1"}}}/>
                <Stack.Screen name="Perfil Usuário" component={Profile} options={{headerStyle: {backgroundColor: "#B0E9C1"}}}/>
                <Stack.Screen name="Editar Perfil" component={SetProfile} options={{headerStyle: {backgroundColor: "#B0E9C1"}}}/>
                <Stack.Screen name="Configuração" component={Configuration} options={{headerStyle: {backgroundColor: "#B0E9C1"}}}/>
                <Stack.Screen name="Histórico de Entregas" component={HistoricalUser} options={{headerStyle: {backgroundColor: "#B0E9C1"}}}/>
                <Stack.Screen name="Histórico de Coletas" component={HistoricalCollector} options={{headerStyle: {backgroundColor: "#B0E9C1"}}}/>
                <Stack.Screen name="Comprovante de Entrega" component={Proof} options={{headerStyle: {backgroundColor: "#B0E9C1"}}}/>
                <Stack.Screen name="Confirmar Entrega" component={ConfirmDelivery} options={{headerStyle: {backgroundColor: "#B0E9C1"}}}/>
                <Stack.Screen name="HomeUser" component={BottomNavUser} options={{ headerShown: false }} />
                <Stack.Screen name="HomeCollector" component={BottomNavCollector} options={{ headerShown: false}} />
                <Stack.Screen name="Detalhes de Coletar" component={DetailsDelivery} options={{headerStyle: {backgroundColor: "#B0E9C1"}}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}