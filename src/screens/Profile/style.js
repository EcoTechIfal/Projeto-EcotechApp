import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bloco: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  InfoPerfil: {
    marginBottom: 20,
  },
 dataBloco: {
    width: '80%',
  },
  dados: {
    flexDirection: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginBottom: 3,
    borderColor: "red",
    borderRadius: 15,
  },
  texto: {
    fontWeight: 'bold',
  },
  valor: {
    marginLeft: 10,
  },

  button: {
      backgroundColor: '#B0E9C1',
      padding: 14,
      marginBottom: 12,
      borderRadius: 11,
  },
});

export default styles