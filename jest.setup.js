jest.mock("expo-constants", () => ({
  manifest: {
    extra: {
      API_URL: "https://my-api-url.com",
      API_KEY: "my-api-key",
    },
  },
}));
