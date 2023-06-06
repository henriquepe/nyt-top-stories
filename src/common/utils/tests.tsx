import { ThemeProvider } from "styled-components/native";
import { lightTheme } from "../theme";
import { render } from "@testing-library/react-native";

export const renderWithThemeProvider = (children) => {
  return render(<ThemeProvider theme={lightTheme}>{children}</ThemeProvider>);
};
