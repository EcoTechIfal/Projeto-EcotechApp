import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
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
      alignSelf:'center',
      margin: "8%"
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
      margin:"12%",
      borderRadius: 10,
  },
    textButton: {
       textAlign: "center"
    },
     Camera: {
       position: 'absolute',
     },
  });

  export default Styles