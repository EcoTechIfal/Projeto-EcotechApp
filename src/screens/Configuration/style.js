import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8', 
  },
  bloco: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff', 
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000', 
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 40, 
    marginRight: 15,
  },
  textoContainer: {
    flex: 1,
  },
  textoNome: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textoFuncao: {
    fontSize: 16,
    color: '#7f8c8d', 
  },
  bottom: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#B0E9C1',
    borderRadius: 5,
    alignItems: 'center',
  },
  acao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,

  },
  iconeContainer: {
    marginRight: 10,
  },
  sair: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#e74c3c',
    position:'absolute',
    bottom: 10,
    left: '40%',
    right: '40%',
    width: 100
  },
  iconeSair: {
    marginRight: 10,
  },
  textoSair: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
