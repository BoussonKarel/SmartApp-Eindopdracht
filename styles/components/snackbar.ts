import { StyleSheet } from "react-native";
import { neutral, theme } from "../utils/colors";

export const snackbarStyle = StyleSheet.create({
  bar: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    height: 56,

    backgroundColor: neutral[750],

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  message: {
    color: neutral[100]
  },
  button: {
    color: theme[900],
    fontWeight: "700"
  }
})