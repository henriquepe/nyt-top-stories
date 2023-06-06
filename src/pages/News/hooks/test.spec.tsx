import { useNavigation, useRoute } from "@react-navigation/native";
import { renderHook } from "@testing-library/react-hooks";
import { useNews } from "./use-news"; // Atualize este import para o caminho correto do seu hook

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

describe("useNews hook", () => {
  it("should get url from route params and set header options", () => {
    const mockUrl = "test_url";
    const setOptions = jest.fn();

    (useNavigation as jest.Mock).mockReturnValue({
      setOptions,
    });

    (useRoute as jest.Mock).mockReturnValue({
      params: {
        url: mockUrl,
      },
    });

    const { result } = renderHook(() => useNews());

    expect(result.current.url).toBe(mockUrl);
    expect(setOptions).toHaveBeenCalledWith({
      headerRight: expect.any(Function),
    });

    // Testar se headerRight retorna null
    const headerRight = setOptions.mock.calls[0][0].headerRight;
    expect(headerRight()).toBeNull();
  });
});
