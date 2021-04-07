import { StyleSheet } from "react-native";
import { neutral } from "../utils/colors";

export const cardStyle = StyleSheet.create({
  card: {
    height: 56,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 16,
    backgroundColor: neutral[100],
    borderBottomWidth: 1,
    borderBottomColor: neutral[300]
  },
  icon: {
    paddingRight: 16
  },
  text: {
    flexGrow: 1
  },
  title: {},
  sub: {},
  amount: {
    flexGrow: 0
  }
})