import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 135,
  },

  button: {
    backgroundColor: '#B0E9C1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginVertical: 10,
    gap: 10,
    width: 340,
    height: 40,
    alignSelf: 'center',
  },

  buttonText: {
    color: '#000',
    fontSize: 16,
    alignSelf: 'center',
  },

  logo: {
    marginTop: 30,
  },

  pontos: {
    fontWeight: 'bold',
    color: '#3E8914',
    fontSize: 23,
    margin: 10,
    marginTop: 20,
  },

  text: {
    fontSize: 16,
    marginTop: -5,
    marginBottom: 0,
    textAlign: 'center',
    color: '#8C8F93',
  },

  T: {
    marginRight: 100,
    marginLeft: 100,
  },

  caixa: {
    borderWidth: 3,
    borderColor: '#98DF77',
    marginTop: 20,
    marginBottom: 90,
    paddingBottom: -3,
    paddingTop: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    alignSelf: 'center',
  },

  total: {
    fontWeight: 'bold',
    marginLeft: 80,
    marginBottom: 40,
    marginTop: -40,
    fontSize: 19,
  },

  atual: {
    marginLeft: 70,
    marginBottom: 40,
    marginTop: -30,
    fontSize: 15,
  },
});
export default Styles;
