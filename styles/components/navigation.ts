import { StyleSheet } from "react-native";
import { neutral, theme } from "../utils/colors";

export const navigationStyle = StyleSheet.create({
  tab: {
    height: 56
  },
  tabItem: {

  },
  scannerIcon: {
    backgroundColor: theme[900],
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 50,
  },
  header: {
    // stack nav header
    backgroundColor: theme[900]
  },
  headerTitle: {
    fontFamily: 'Roboto',
    fontWeight: '500', // Rendert niet in 500?
    fontSize: 20,
    color: neutral[100]
  },
})