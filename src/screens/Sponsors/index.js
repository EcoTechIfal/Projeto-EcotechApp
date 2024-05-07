import React, { useState } from 'react';
import {FlatList, View, Image, Text, StyleSheet,} from 'react-native';

export default function Sponsors({route}) {
    const [patro, setPatro] = useState('')

    React.useEffect(()=>{
        setPatro(route.params.patrocinadores)
    },[])

  return (
    <View>
        <Text>Patrocinadores</Text>
      
        <FlatList
        data={patro}
        renderItem={({item}) =>{
          return( 
            <View>
              <Text>{item.nome}</Text>
              <Image style={{width: "80%", height: 100, flex:1}} source={{uri: item.fotoPatro}}/>
            </View>
           )}}
           keyExtractor={(item) => item.id}/>
    </View>
  );
};