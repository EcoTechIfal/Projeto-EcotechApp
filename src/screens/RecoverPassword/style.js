import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({

    Container: {
      backgroundColor: '#DCE2DE',
      textAlign: 'center',
      padding: 20,
      margin: 30,
      borderRadius: 4,
      marginTop: 100,
      gap: 20,
    },

    Title: {
      fontWeight: '400',
      fontSize: 14,
      textAlign: "center",
      margin: 10,
      marginBottom: 35
    },

    Text01: {
      fontSize: 10,
      fontWeight: '400',
      textAlign: 'center',
      marginBottom: 12
    },

    User: {
        textAlign: 'start'
    },

    Botton: {
        backgroundColor:'#64DF89',
        alignItems: 'center',
        borderRadius: 4,
        padding: 6,
        marginTop: 20,
        marginLeft: 75,
        marginRight: 75
    },

    Cancel:{
      textDecorationLine: 'underline',
      paddingTop: 15,
      textAlign: 'center',
      fontSize: 10,
      color: '#1A3E07'
    },

    Input: {
      fontSize: 10,
      backgroundColor: '#FFFFFF',
      opacity: 0.6,
      borderRadius: 4,
      padding: 2,
    },

    Em:{
      paddingTop: 7,
      paddingBottom: 7,
      fontSize: 10,
      color: '#413F3F'
    },
    
    Img:{
      alignSelf:  'center',
      width: 220,
      marginTop: 50,
      marginRight: 40,
      opacity: 0.8,
      backgroundColor: "black"
    },

    Fundo:{
      backgroundColor: '#FFF',
      height: 1000
    },
    

  });
  
export default Styles