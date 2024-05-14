import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    bottom: {
      alignItems: "center",
      backgroundColor: '#B0E9C1',
      padding: 3,
      marginBottom: 5,
      borderRadius: 11,
      width: 100,
      
    },
    bloco: {
      backgroundColor: "#B0E9C1",
      alignItems: "center",
      flexDirection:"row", 
      paddingVertical:15,
      paddingHorizontal: 10,
    },
    sair: {
    alignItems: 'center',
    backgroundColor: '#B0E9C1',
    padding: 3,
    marginBottom: 5,
    borderRadius: 11,
    position: 'absolute',
    bottom: 0,
    width: 100,
    alignSelf: 'center',
    flexDirection: 'row', 
    justifyContent: 'center', 

    },
    acao:{
      paddingVertical:25,
      flexDirection: 'row', 
      alignItems: 'center',
      marginRight: 60,
      gap:15,
      
   },
   imagem: {
   borderRadius: 100,
   width: 100,
   height: 100,
   backgroundColor: 'black',
   marginRight: 20,

  },
   textoContainer: {
   flex: 1,
  },
  textoNome: {
    marginBottom: 5, 
    
  },
  textoFuncao: {
    marginBottom: 5,
  },
  iconeContainer: {
  paddingHorizontal:10,

  },
  iconeSair: {
      flexDirection: 'row', 
      alignItems: 'center',
      gap:15,
      marginRight: 10,
      marginVertical:5,

  },
  textoSair:{
  fontSize: 16,
  marginVertical:5,
},
});

export default Styles
  