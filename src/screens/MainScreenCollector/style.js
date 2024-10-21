import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  container2: {
    marginTop: 40,
  },
  maca: {
    backgroundColor: '#ffffff', // Fundo branco para cada item
    padding: 15,
    borderRadius: 10,
    marginBottom: 10, // Espaçamento inferior
  },
  papel: {
    fontSize: 18,
    color: '#2c3e50',
  },
  papel2: {
    marginLeft: 10,
  },

  mod:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, 

  textMod:{
    marginTop: 5,
    padding: 20,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  vidro: {
    fontSize: 18,
    color: '#2c3e50',
  },
  vidro2: {
    marginLeft: 10,
  },
  mala: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  platico: {
    fontSize: 18,
    color: '#2c3e50',
  },
  platico2: {
    marginLeft: 10,
  },
  tiro: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
  },
  outros: {
    fontSize: 18,
    color: '#2c3e50',
  },
  outros2: {
    marginLeft: 10,
  },
  etario: {
    position:'absolute',
    bottom: 20,
  },
  barril: {
    backgroundColor: '#B0E9C1',
    padding: 15,
    borderRadius: 10,
    left: '78%',
    width: 160,
  },
  pendencias: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 'auto',
  },
});

export default styles;
