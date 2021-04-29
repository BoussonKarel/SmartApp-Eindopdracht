import * as Haptics from 'expo-haptics';
import { Alert, Vibration } from 'react-native';

export const feedback = {
  userSuccess: (succesMsg : string = "") => {
    if (succesMsg != "")
      console.log(succesMsg)
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  },
  userError: (errorMsg : string) => {
    console.error(errorMsg);
    Vibration.vibrate(); // welk pattern doet denken aan warning
  },
  error: (errorMsg : string) => {
    // Snackbar?
    // Toast? Maar afgeraden? Enkel Android?
    console.error(errorMsg);
    // ContextProvider maken, daarin ux.ts zetten
    // in App.tsx
    // Component Snackbar renderen
    // Aansturen via contextprovider
  },
  warning: (errorMsg : string) => {
    Alert.alert(errorMsg);
  },
}
