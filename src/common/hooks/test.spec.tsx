import { renderHook, act } from "@testing-library/react-hooks";
import { useTheme } from "./use-theme";
import { useTheme as useThemeReactNativePaper } from "react-native-paper";
import { ThemeContext } from "../../contexts/ThemeContext";

jest.mock("react-native-paper");

describe("useTheme", () => {
  it("should toggle color scheme", () => {
    (useThemeReactNativePaper as jest.Mock).mockReturnValue({});

    const mockContext = { colorScheme: "light" };

    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeContext.Provider value={mockContext}>
          {children}
        </ThemeContext.Provider>
      ),
    });

    expect(result.current.currentColorScheme).toBe("light");

    act(() => {
      result.current.handleToggleTheme();
    });

    expect(result.current.currentColorScheme).toBe("dark");
  });

  it("should return theme from react-native-paper and colorScheme from context", () => {
    const mockTheme = { colors: { primary: "#000" } };
    (useThemeReactNativePaper as jest.Mock).mockReturnValue(mockTheme);

    const mockContext = { colorScheme: "light" };

    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeContext.Provider value={mockContext}>
          {children}
        </ThemeContext.Provider>
      ),
    });

    expect(result.current.theme).toBe(mockTheme);
    expect(result.current.contextColorScheme).toBe(mockContext.colorScheme);
  });
});
