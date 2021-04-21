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
    height: 256,
  },
  small: {
    height: "100%",
    width: "auto",
  }
})