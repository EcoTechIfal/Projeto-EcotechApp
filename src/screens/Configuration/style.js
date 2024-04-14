import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      backgroundColor: "green",
      alignItems: "center",
    },
    sair: {
      alignItems: "center",
      backgroundColor: '#B0E9C1',
      padding: 3,
      marginBottom: 5,
      borderRadius: 11,
      position: 'absolute', 
      bottom: 0, 
      width: 100,
      alignSelf: 'center'
    },
  });

  export default styles