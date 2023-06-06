import { useTheme as useThemeReactNativePaper } from "react-native-paper";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext, useState } from "react";

export function useTheme() {
  const [currentColorScheme, setCurrentColorScheme] = useState<
    "light" | "dark"
  >("light");
  const handleToggleTheme = () => {
    setCurrentColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const theme = useThemeReactNativePaper();
  const { colorScheme: contextColorScheme } = useContext(ThemeContext);
  return { theme, contextColorScheme, currentColorScheme, handleToggleTheme };
}
