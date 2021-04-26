import { StyleSheet } from "react-native";
import { neutral, theme } from "./utils/colors";

export const appStyle = StyleSheet.create({
  container: {
    backgroundColor: theme[100]
    // paddingTop: 8,
  },
  activityIndicator: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  }
});