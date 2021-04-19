import { StyleSheet } from "react-native";
import { neutral, theme } from "../utils/colors";

export const operationStyle = StyleSheet.create({
  card: {
    marginTop: 8,
    paddingVertical: 13,
    paddingHorizontal: 16,
    backgroundColor: neutral[100],
    borderBottomWidth: 1,
    borderBottomColor: neutral[300]
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",    
    marginBottom: 8
  },
  operation: {
  },
  amount: {
    fontSize: 51,
  },
  button: {
    paddingVertical: 8,
    backgroundColor: theme[900]
  },
  buttonText: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: 16,
    color: neutral[100],
    fontWeight: "bold",
  }
})