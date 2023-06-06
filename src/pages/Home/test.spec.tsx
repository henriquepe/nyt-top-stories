import React from "react";
import { fireEvent } from "@testing-library/react-native";
import { Home } from "./index";
import * as homeHook from "./hooks/use-home";
import { renderWithThemeProvider } from "../../common/utils/tests";

describe("Home", () => {
  it("renders correctly and responds to button press", () => {
    const mockHandleNewsPress = jest.fn();
    const mockHandleScrollToTop = jest.fn();

    jest.spyOn(homeHook, "useHome").mockReturnValue({
      handleNewsPress: mockHandleNewsPress,
      handleScrollToTop: mockHandleScrollToTop,
      isLoading: false,
      listRef: { current: null },
      topStories: [
        {
          title: "test",
          byline: "test",
          multimedia: [{ url: "test" }, { url: "test" }],
          abstract: "test",
          short_url: "test",
        },
      ],
    });

    const { getByText } = renderWithThemeProvider(<Home />);

    const button = getByText("Voltar para o topo");
    fireEvent.press(button);
    expect(mockHandleScrollToTop).toHaveBeenCalled();
  });
});
