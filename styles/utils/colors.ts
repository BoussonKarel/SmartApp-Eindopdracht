import { StyleSheet } from 'react-native';

export const neutral = {
  100 : '#FFFFFF',
  500 : '#757575',
  900 : '#0D0D0D',
};

export const theme = {
  100: '#F2F2F2',
  900: '#0079C4'
}

// neutral[800];

export const background = {
  neutral : StyleSheet.create({
    100 : {
      backgroundColor: neutral[100]
    },
    500 : {
      backgroundColor: neutral[500]
    },
    900 : {
      backgroundColor: neutral[900]
    },
  }),
  theme: StyleSheet.create({
    100: {
      backgroundColor: theme[100]
    },
    900: {
      backgroundColor: theme[900]
    }
  })
}

export const text = {
  neutral : StyleSheet.create({
    100 : {
      color: neutral[100]
    },
    500 : {
      color: neutral[500]
    },
    900 : {
      color: neutral[900]
    },
  }),
  theme: StyleSheet.create({
    100: {
      color: theme[100]
    },
    900: {
      color: theme[900]
    }
  })
}