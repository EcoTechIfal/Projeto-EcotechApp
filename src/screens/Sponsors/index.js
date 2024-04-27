import React, { useState } from 'react';
import { View, Text, StyleSheet,} from 'react-native';

export default function Sponsors({route}) {
    const [uid, setUid] = useState('')

    React.useEffect(()=>{
        setUid(route.params.uid)
    },[])

  return (
    <View>
        <Text>Patrocinadores</Text>
      
        <View>
            <Text>Image</Text>
            <Text>Mercado1</Text>
        </View>
    </View>
  );
};