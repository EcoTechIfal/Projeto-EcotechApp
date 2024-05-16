import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreenCollector from '../screens/MainScreenCollector';
import Points from "../screens/Points"
import ScheduleDelivery from "../screens/ScheduleDelivery"
import {View, Text} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

const Tab = createBottomTabNavigator();


export default function BottomNavCollector({navigation, route}){
  const uid = route.params.uid
  const dados = route.params.dados
  return (
    <Tab.Navigator  tabBarOptions={{activeTintColor: "black"}}     
    screenOptions={{tabBarStyle: { backgroundColor: '#B0E9C1' }}}>
        <Tab.Screen initialParams={{uid: uid, dados: dados}} name="Home" component={MainScreenCollector} 
        options={{headerStyle: {backgroundColor: "#B0E9C1"}, tabBarIcon: ()=>{<Icon name="home" size={30} color="black"/>} 
        ,headerRight: () => (<View style={{flexDirection: "row"}}>
        <Icon style={{margin: 10}} onPress={()=> navigation.navigate("Patrocinadores", {uid: uid, dados: dados})} name="group" size={30} color="black"/> 
        <Icon style={{margin: 10}} onPress={()=> navigation.navigate("Configuração",{uid: uid, dados: dados})} name="cog" size={30} color="black"/>
        </View>)
        }}/>
      </Tab.Navigator>
  );
}