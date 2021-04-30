import React, { createContext, useContext, useState } from "react"
import { Button, View, Text, Alert } from "react-native";
import Snackbar from "../models/Snackbar";
import * as Haptics from 'expo-haptics';

// SNACKBAR
const DEFAULT_SNACKBAR : Snackbar = {
  show: false,
  displayText: "",
  timeOut: 2000
}

// SUCCESS
const userSuccess = () => {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
}

// WARNING (big errors)
const showWarning = (warning: string) => {
  Alert.alert(warning); Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
}

// FEEDBACK CONTEXT
const FeedbackContext = createContext({
  snackbar: DEFAULT_SNACKBAR,
  showError: (displayText: string) => { console.error(displayText) },
  closeError: () => { console.error("ERROR: Snackbar not implemented!") },
  userSuccess: userSuccess,
  showWarning: showWarning,
});

// You can now easily call 'const feedback = useFeedback();'
export function useFeedback() {
  return useContext(FeedbackContext);
}

// Feedbac.Provider
export function FeedbackProvider({ children } : any) {
  const [snackbar, setSnackbar] = useState<Snackbar>(DEFAULT_SNACKBAR);

  const showError = (displayText: string) => {
    setSnackbar((s) => {
      s.show = true;
      s.displayText = displayText;
      return { ...s}
    });

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);

    setTimeout(() => {
      closeError();
    }, snackbar.timeOut);
  }

  const closeError = () => {
    setSnackbar((s) => {
      s.show = false;
      s.displayText = "";
      return { ...s }
    });
  }

  return (
    <FeedbackContext.Provider value={{snackbar, showError, closeError, userSuccess, showWarning}}>
      {children}
      { snackbar.show ? <View>
        <Text>{snackbar.displayText}</Text>
        <Button onPress={closeError} title="Close" />
      </View> : <></>}
    </FeedbackContext.Provider>
  )
}