import { StyleSheet } from "react-native";

export default StyleSheet.create({
  fullScreenOverlayContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  },
  fullScreenOverlayText: {
    color: "#FFFFFF",
    marginTop: 10
  }
});
