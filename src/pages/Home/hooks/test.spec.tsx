import { renderHook, act } from "@testing-library/react-hooks";
import { useNavigation } from "@react-navigation/native";
import { useHome } from "./use-home";
import newsApi from "../../../api";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

jest.mock("../../../api", () => ({
  getTopStories: jest.fn(),
}));

describe("useHome hook", () => {
  it("should fetch top stories on mount and update state", async () => {
    const mockStories = [{ id: 1, title: "Test Story" }];
    (newsApi.getTopStories as jest.Mock).mockResolvedValue({
      data: mockStories,
    });

    const { result, waitForNextUpdate } = renderHook(() => useHome());
    expect(newsApi.getTopStories).toHaveBeenCalled();
    await waitForNextUpdate();
    expect(result.current.topStories).toEqual(mockStories);
  });

  it("should navigate to News screen with url on handleNewsPress", () => {
    const navigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ navigate });

    const { result } = renderHook(() => useHome());

    const mockUrl = "test_url";
    act(() => {
      result.current.handleNewsPress(mockUrl);
    });

    expect(navigate).toHaveBeenCalledWith("News", { url: mockUrl });
  });

  it("should scroll to top on handleScrollToTop", () => {
    const scrollToOffset = jest.fn();
    const mockListRef = { current: { scrollToOffset } };
    const { result } = renderHook(() => useHome());
    act(() => {
      result.current.listRef.current = mockListRef.current;
      result.current.handleScrollToTop();
    });
    expect(scrollToOffset).toHaveBeenCalledWith({ offset: 0, animated: true });
  });
});
