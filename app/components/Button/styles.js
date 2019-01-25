import { StyleSheet } from "react-native";

const BORDER_RADIUS = 4;

export default StyleSheet.create({
  container: {
    backgroundColor: "#2695D2",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: BORDER_RADIUS,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#FFFFFF",
    fontSize: 14
  }
});
