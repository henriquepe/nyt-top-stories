import { render } from "@testing-library/react-native";
import { News } from "../News";
import { useNews } from "./hooks/use-news";
import React from "react";
jest.mock("./hooks/use-news");
describe("News", () => {
  it("should render WebView with the correct url", () => {
    (useNews as jest.Mock).mockReturnValue({
      url: "https://test.com",
    });

    const { getByTestId } = render(<News />);

    const webViewComponent = getByTestId("webview");
    expect(webViewComponent.props.source.uri).toBe("https://test.com");
  });
});
