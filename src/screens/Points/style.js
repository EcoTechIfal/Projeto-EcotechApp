import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f7', 
    justifyContent: 'center', 
  },
  container2: {
    marginBottom: 30, 
    alignItems: 'center',
  },
  pontos: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, 
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#B0E9C1', 
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  caixa: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    marginTop: 30,
  },
  peso: {
    marginRight: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  atual: {
    fontSize: 14,
    color: '#7f8c8d', 
  },
});

export default styles;
