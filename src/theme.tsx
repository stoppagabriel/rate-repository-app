import { Platform } from 'react-native';

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      navBar: '#24292e',
      textLight: 'white',
      mainBg: '#e1e4e8',
      error: '#d73a4a'
    },
    fontSizes: {
      body: 14,
      subheading: 18,
    },
    fonts: {
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System'
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    gap: {
      base: 1,
      xs: 5,
      s: 10,
      m: 20,
      l: 30,
      xl: 40
    }
  };
  
  export default theme;