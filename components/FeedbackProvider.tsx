import React, { createContext, useContext, useState } from "react"
import { Alert, Vibration } from "react-native";
import Snackbar from "./Snackbar";

// SNACKBAR
const DEFAULT_SNACKBAR = {
  show: false,
  displayText: "",
  timeOut: 2000
}

// SUCCESS
const userSuccess = () => {
  Vibration.vibrate([100,100,100,100]);
}

// WARNING (big errors)
const showWarning = (warning: string) => {
  Alert.alert(warning); Vibration.vibrate();
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
  const [snackbar, setSnackbar] = useState(DEFAULT_SNACKBAR);

  const showError = (displayText: string) => {
    setSnackbar((s) => {
      s.show = true;
      s.displayText = displayText;
      return { ...s}
    });

    Vibration.vibrate();

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
      { snackbar.show ? <Snackbar closeEvent={closeError}>{ snackbar.displayText}</Snackbar> : <></>}
    </FeedbackContext.Provider>
  )
}