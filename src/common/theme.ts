import { DefaultTheme, MD3Theme } from "react-native-paper";

const lightTheme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000",
    background: "#f6f6f6",
    surface: "#fff",
    error: "#B00020",
  },
};

const darkTheme: MD3Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FFF",
    secondary: "#03dac6",
    background: "#121212",
    surface: "#121212",
    error: "#CF6679",
  },
};

const fonts = {
  "Nunito-Black": require("../../assets/fonts/Nunito-Black.ttf"),
  "Nunito-Bold": require("../../assets/fonts/Nunito-Bold.ttf"),
  "Nunito-ExtraBold": require("../../assets/fonts/Nunito-ExtraBold.ttf"),
  "Nunito-ExtraLight": require("../../assets/fonts/Nunito-ExtraLight.ttf"),
  "Nunito-Light": require("../../assets/fonts/Nunito-Light.ttf"),
  "Nunito-Regular": require("../../assets/fonts/Nunito-Regular.ttf"),
  "Nunito-SemiBold": require("../../assets/fonts/Nunito-SemiBold.ttf"),
  "Nunito-Italic": require("../../assets/fonts/Nunito-Italic.ttf"),
};

export { lightTheme, darkTheme, fonts };
