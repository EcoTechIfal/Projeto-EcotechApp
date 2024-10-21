import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerGeral: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    imgLogo: {
        width: 150,
        height: 150,
    },
    container: {
        width: "100%",
        maxWidth: 400,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        padding: 20,
    },
    imgContainer: {
        marginBottom: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#6b7280",
        textAlign: "center",
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 5,
        color: "#333",
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: "#f5f5f5",
        fontSize: 16,
    },
    recoverPasswordContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
    recoverPassword: {
        color: 'green',
        fontWeight: "bold",
    },
    btn: {
        backgroundColor: '#B0E9C1',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 10,
    },
    btnText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    registerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    register: {
        color: "green",
        fontWeight: "bold",
    },
});

export default styles;
