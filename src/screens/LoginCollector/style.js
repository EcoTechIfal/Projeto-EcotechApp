import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  imgContainer: {
    marginBottom: 30,
  },
  imgLogo: {
    resizeMode: "contain",
    width: 200,
    height: 180,
    alignSelf: "center"
  },

  title: {
    fontSize: 27,
    fontWeight: '700',
    color: "#1e1e1e",
    textAlign: "center",
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: 'center',
    color: "#929292"
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
    marginBottom: 6,
    marginStart: 2
  },
  inputContainer: {
    marginBottom: 14,
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    fontSize: 17,
    fontWeight: "500",
  },
  recoverPassword: {
    textAlign: "right",
    color: '#3E8914',
    textDecorationLine: 'underline',
    fontWeight: "600",
  },
  recoverPasswordContainer: {
    flexDirection: "row",
  },
  btn: {
    backgroundColor: "#B0E9C1",
    paddingVertical: 18,
    justifyContent: "center",
    borderRadius: 6,
    marginVertical: 20
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: '500',
  },
  register: {
    color: "#3E8914",
    marginStart: 5,
    fontWeight: "600",
    textDecorationLine: "underline"
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  }

});

export default styles