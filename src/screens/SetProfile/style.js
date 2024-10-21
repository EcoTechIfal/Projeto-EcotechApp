import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8', // Cor de fundo suave
  },
  fotoPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 0.5,
    backgroundColor: '#B0E9C1', 
    position: 'relative',
  },
  Camera: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 3,
  },
  informacao: {
    marginBottom: 15,
  },
  dados: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#B0E9C1', 
    borderRadius: 5,
    alignItems: 'center',
    padding: 15,
    marginTop: 20,
    width: 140,
    margin: 'auto'
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Styles;
