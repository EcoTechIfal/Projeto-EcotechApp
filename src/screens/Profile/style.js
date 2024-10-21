import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bloco: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8', // Cor de fundo suave
  },
  InfoPerfil: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    borderRadius: 100,
    width: 200,
    height: 200,
    backgroundColor: "black",
    overflow: 'hidden',
  },
  profileImage: {
    borderRadius: 100,
    width: "100%",
    height: "100%",
  },
  placeholderImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#bdc3c7", // Cor para a imagem de espaço reservado
  },
  dataBloco: {
    marginBottom: 20,
  },
  dados: {
    marginBottom: 10,
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  valor: {
    fontSize: 14,
    color: '#34495e', 
  },
  button: {
    backgroundColor: '#B0E9C1', 
    borderRadius: 5,
    alignItems: 'center',
    padding: 15,
    width: 140,
    margin: 'auto',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
