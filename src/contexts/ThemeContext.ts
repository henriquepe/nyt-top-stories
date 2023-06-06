import { createContext } from "react";
import { ThemeContextType } from "./types";
import { MD3Theme } from "react-native-paper";

export const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  theme: {} as MD3Theme,
  colorScheme: "light",
});
