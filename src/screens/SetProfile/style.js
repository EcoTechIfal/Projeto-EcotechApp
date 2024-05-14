import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      
    },
    informacao: {
      fontWeight: 'bold',
      marginBottom: 20,
    },
    fotoPerfil: {
      borderRadius:100,
      width:150,
      height:150,
      backgroundColor:'black',
      justifyContent:'center',
      alignSelf:'center'
     },
    dados: {
      fontWeight: 'bold',
      borderWidth: 1,
      borderColor: 'rgb(192, 192, 192)',
      backgroundColor:'rgb(192, 192, 192)',
      padding: 10,
      borderRadius: 8,
    },
    button: {
      backgroundColor: '#B0E9C1',
      padding: 14,
      marginBottom: 12,
      borderRadius: 11,
      marginRight: 40,
      marginLeft: 40
  },
    textButton: {
       textAlign: "center"
    },
     Camera: {
       position: 'absolute',
      bottom: 0,
      right: 0,
     },
  });

  export default Styles