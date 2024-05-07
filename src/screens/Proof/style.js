import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  //  parte de cima
  container: {
    flex: 1,
    paddingVertical: "10%",
    justifyContent: "space-between",
  },
  main: {
    gap: 15,
    justifyContent: "space-evenly",
    marginLeft: "10%",
  },
  partup: {
    flexDirection: "row",
    gap: "20%",
  },
  partdown: {
    flexDirection: "row",
    gap: "20%",
  },
  type: {
    fontSize: 12,
    color: "#8C8F93",
  },
  types: {
    fontSize: 12,
    color: "#8C8F93",
    right: "40% ",
  },
  sets: {
    right: "40%",
    fontSize: 14,
    fontWeight: "500",
  },
  set: {
    fontSize: 14,
    fontWeight: "500",
  },
  botton: {
    flexDirection: "row",
    gap: 20,
    alignSelf: "center",
    bottom: "8%",
  },
  // titulo da coleta:
  title: {
    padding: "15%",
  },

  txt: {
    fontSize: 17,
    fontWeight: "500",
    alignSelf: "center",
  },
  //termina aq ;

  // parte de baixo

  layer: {
    gap: 15,
    marginLeft: "10%",
  },
  status: {
    paddingTop: "5%",
  },
  // terminando;

  //linha
  line: {
    borderColor: "black",
    borderWidth:1,
    width: "90%",
    marginTop: "15%",
    margin: "5%",
    marginBottom: "20%",
  },

  //  botons
  touch: {
    backgroundColor: "#B0E9C1",
    padding: 10,
    flexDirection: "row",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    fontStyle: "inter",
  },

  texttouch: {
    fontSize: 12,
  },
  icon: {
    fontSize: 12,
  },
});

export default Styles;
