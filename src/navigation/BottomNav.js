import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreenUser from "../screens/MainScreenUser"
import Points from "../screens/Points"
import ScheduleDelivery from "../screens/ScheduleDelivery"
import {View, Text} from "react-native"

const Tab = createBottomTabNavigator();


export default function BottomNav({navigation}){
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainScreenUser} options={{headerRight: () => (<View><Text style={{marginRight: 5}} onPress={()=> navigation.navigate("Patrocinadores")}>patro</Text><Text onPress={()=> navigation.navigate("Configuração")}>Config</Text></View>)}}/>
        <Tab.Screen name="Pontos" component={Points} />
      </Tab.Navigator>
  );
}