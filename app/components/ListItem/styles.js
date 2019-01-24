import { StyleSheet } from "react-native";

export default StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12
  },
  infoContainer: {
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 12,
    justifyContent: "flex-start"
  },
  infoContainerIndicator: {
    justifyContent: "flex-end"
  },
  indicator: {
    fontWeight: "normal",
    fontSize: 16,
    color: "#53B5E1"
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#3C4146"
  },
  ownerLogin: {
    fontWeight: "normal",
    fontSize: 14,
    color: "#3C4146"
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#B3BCC7"
  }
});
