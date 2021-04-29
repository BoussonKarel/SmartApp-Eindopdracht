import React, { createContext, useContext, useState } from "react"
import { Button, View, Text } from "react-native";

const DEFAULT_SNACKBAR = {
  show: false,
  displayText: "",
  timeOut: 2000,
  handleOpen: (displayText: string) => {},
  handleClose: () => {}
}

const SnackBarContext = createContext(DEFAULT_SNACKBAR);

export function useSnackbar() {
  return useContext(SnackBarContext);
}

export function SnackBarProvider({ children } : any) {
  const [snackbar, setSnackbar] = useState(DEFAULT_SNACKBAR)

  const handleOpen = (displayText: string) => {
    setSnackbar((s) => {
      s.show = true;
      s.displayText = displayText;
      return { ...s}
    });

    setTimeout(() => {
      handleClose();
    }, snackbar.timeOut);
  }

  const handleClose = () => {
    setSnackbar((s) => {
      s.show = false;
      s.displayText = "";
      return { ...s }
    });
  }

  return (
    <SnackBarContext.Provider value={{...snackbar, handleOpen, handleClose}}>
      {children}
      { snackbar.show ? <View>
        <Text>{snackbar.displayText}</Text>
        <Button onPress={handleClose} title="Close" />
      </View> : <></>}
    </SnackBarContext.Provider>
  )
}