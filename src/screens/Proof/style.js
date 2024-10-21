import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  partup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  type: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 5,
  },
  set: {
    fontSize: 18,
    fontWeight: '400',
  },
  text: {
    flexDirection: 'row',
    marginBottom: 20,
    
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 20,
  },
  botton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touch: {
    backgroundColor: '#B0E9C1',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texttouch: {
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    marginLeft: 10,
  },
});
