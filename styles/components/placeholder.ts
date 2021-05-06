import { StyleSheet } from "react-native";
import { neutral } from "../utils/colors";

export const placeHolderStyle = StyleSheet.create({
  container: {
    paddingVertical: 13,
    paddingHorizontal: 16,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 8,
    fontSize: 20,
    color: neutral[500],
    textAlign: "center",
    fontWeight: "bold",
  },
});
