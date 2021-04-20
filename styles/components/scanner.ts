import { StyleSheet } from "react-native";
import { neutral } from "../utils/colors";

export const scannerStyle = StyleSheet.create({
  card: {
    marginTop: 8,
    marginBottom: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: neutral[100],
    borderBottomWidth: 1,
    borderBottomColor: neutral[300]
  },
  big: {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  smallContainer: {
    display: "block",
    height: 128,
    overflow: "hidden"
  },
  small: {
    height: "100%",
    width: "100%",
    marginHorizontal: 0,
    marginLeft: 0,
    marginStart: 0,
    paddingHorizontal: 0,
    paddingLeft: 0,
    paddingStart: 0,
    padding: 0
  }
})