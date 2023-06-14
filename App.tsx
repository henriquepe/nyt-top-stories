import React from "react";
import Constants from "expo-constants";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { darkTheme, fonts, lightTheme } from "./src/common/theme";
import { Router } from "./src/common/router";
import { useTheme } from "./src/common/hooks/use-theme";
import { ThemeContext } from "./src/contexts/ThemeContext";
import { ThemeProvider } from "styled-components/native";

function App() {
  const { handleToggleTheme, currentColorScheme } = useTheme();
  const [fontsLoaded] = useFonts(fonts);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider
      theme={currentColorScheme === "dark" ? darkTheme : lightTheme}
    >
      <ThemeContext.Provider
        value={{
          toggleTheme: handleToggleTheme,
          theme: currentColorScheme === "dark" ? darkTheme : lightTheme,
          colorScheme: currentColorScheme,
        }}
      >
        <PaperProvider
          theme={currentColorScheme === "dark" ? darkTheme : lightTheme}
        >
          <NavigationContainer>
            <Router changeTheme={handleToggleTheme} />
          </NavigationContainer>
        </PaperProvider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig.extra.STORYBOOK_ENABLED === "true") {
  AppEntryPoint = require("./.storybook").default;
}

export default AppEntryPoint;
