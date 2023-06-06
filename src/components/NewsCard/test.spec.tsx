import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { NewsCard } from "./index";

describe("NewsCard", () => {
  const defaultProps = {
    image: "https://example.com/image.jpg",
    title: "Title",
    author: "Author",
    resume: "Resume",
    onNewsPress: jest.fn(),
  };

  it("renders correctly", () => {
    const { getByText } = render(<NewsCard {...defaultProps} />);

    expect(getByText(defaultProps.title)).toBeTruthy();
    expect(getByText(defaultProps.author)).toBeTruthy();
    expect(getByText(defaultProps.resume)).toBeTruthy();
  });

  it("calls onNewsPress when pressed", () => {
    const { getByText } = render(<NewsCard {...defaultProps} />);

    fireEvent.press(getByText(defaultProps.title));

    expect(defaultProps.onNewsPress).toHaveBeenCalled();
  });
});
