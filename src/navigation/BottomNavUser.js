import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreenUser from "../screens/MainScreenUser"
import Points from "../screens/Points"
import ScheduleDelivery from "../screens/ScheduleDelivery"
import {View, Text} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

const Tab = createBottomTabNavigator();


export default function BottomNavUser({navigation, route}){
  const uid = route.params.uid
  const dados = route.params.dados
  return (
      <Tab.Navigator>
        <Tab.Screen initialParams={{uid: uid, dados: dados}} name="Home" component={MainScreenUser} 
        options={{tabBarIcon: ()=>{<Icon name="home" size={30} color="black"/>} 
        ,headerRight: () => (<View style={{flexDirection: "row"}}>
        <Icon style={{margin: 10}} onPress={()=> navigation.navigate("Patrocinadores", {uid: uid, dados: dados})} name="group" size={30} color="black"/> 
        <Icon style={{margin: 10}} onPress={()=> navigation.navigate("Configuração",{uid: uid, dados: dados})} name="cog" size={30} color="black"/>
        </View>)
        }}/>
        <Tab.Screen initialParams={{uid: uid,dados: dados}} name="Pontos" component={Points} options={{tabBarIcon: ()=> {<Icon name="trophy" size={30} color="black"/>}}}/>
        <Tab.Screen initialParams={{uid: uid,dados: dados}} name="Agendar Entregas" component={ScheduleDelivery}  options={{tabBarIcon: ()=> {<Icon name="star" size={30} color="black" />}}}/>
      </Tab.Navigator>
  );
}