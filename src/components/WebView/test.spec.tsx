import React from "react";
import { render } from "@testing-library/react-native";

import { WebView } from "./index";

describe("WebView", () => {
  const url = "https://example.com";

  it("should render WebView with the correct url", () => {
    const { getByTestId } = render(<WebView url={url} />);

    const webView = getByTestId("webview");
    expect(webView.props.source.uri).toBe(url);
  });
});
