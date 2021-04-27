import * as Haptics from 'expo-haptics';
import { Alert } from 'react-native';

export const feedback = {
  userSuccess: (succesMsg : string = "") => {
    if (succesMsg != "")
      console.log(succesMsg)
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  },
  userError: (errorMsg : string) => {
    console.error(errorMsg);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  },
  error: (errorMsg : string) => {
    // Snackbar?
    // Toast? Maar afgeraden? Enkel Android?
    console.error(errorMsg);
  },
  warning: (errorMsg : string) => {
    Alert.alert(errorMsg);
  },
}
