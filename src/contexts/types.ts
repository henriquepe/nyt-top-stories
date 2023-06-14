import { MD3Theme } from "react-native-paper";

export type ThemeContextType = {
  theme?: MD3Theme;
  toggleTheme?: () => void;
  colorScheme?: string;
};
