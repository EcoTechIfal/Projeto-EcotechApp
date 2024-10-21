import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Cor de fundo clara para a página
  },
  inputContainer: {
    marginBottom: 15, // Espaçamento entre os campos de entrada
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5, // Espaçamento entre o rótulo e o campo de entrada
    color: '#333', // Cor do texto para o rótulo
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#B0E9C1', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center', 
    marginTop: 10,
    width: 140,
    margin: 'auto'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
