import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hello: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "black",
    marginTop: "10%",
  },
  historic: {
    textAlign: "center",
    fontSize: 16,
    color: "black",
    fontWeight: "500",
    margin: "2%",
  },
  line: {
    borderWidth: 1,
    borderColor: "black",
    maxWidth: "90%",
    margin: "5%",
  },
  blockstatus: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "1.5%",
  },
  icons: {
    flexDirection: "row",
    marginLeft: "8%",
    marginBottom: "0.5%",
  },
  status: {
    backgroundColor: "#B0E9C1",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    marginLeft: "6%",
    textAlign: "center",
    alignSelf: "flex-start",
  },
  
  bottom: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginLeft:'12%',
    marginTop:'2%',
 
  },
  touch: {
    backgroundColor: "#B0E9C1",
    width:140,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
   
  },
  view: {
    fontSize: 15,
  },
  points: {
    flexDirection: "row",
  },
});

export default Styles;
