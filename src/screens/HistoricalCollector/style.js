import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    hello: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    historic: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    line: {
        height: 1,
        backgroundColor: 'black',
        marginVertical: 10,
    },
    blockstatus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    date: {
        fontSize: 16,
        color: '#555555',
    },
    time: {
        fontSize: 16,
        color: '#555555',
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    ifal: {
        marginLeft: 5,
        fontSize: 16,
        color: '#333333',
    },
    status: {
        padding: 3,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginBottom: 10,
        color: '#FFFFFF', 
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 300,
        margin: 'auto'
    },
    touch: {
        backgroundColor: '#B0E9C1',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        flex: 1,
        marginRight: 10, 
    },
    view: {
      color: '#333333',
        fontWeight: 'bold',
    },
    points: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Styles;
