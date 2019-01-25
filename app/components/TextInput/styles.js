import { StyleSheet } from "react-native";

const INPUT_HEIGHT = 48;

export default StyleSheet.create({
  container: {
    height: INPUT_HEIGHT,
    width: "100%"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    width: "100%",
    height: "100%",
    fontSize: 18,
    color: "#000000",
    flex: 1
  },
  floatingLabel: {
    fontSize: 12,
    marginLeft: 4,
    color: "#BDC4CF"
  },
  errorLabel: {
    fontSize: 12,
    marginLeft: 4,
    color: "red"
  }
});
