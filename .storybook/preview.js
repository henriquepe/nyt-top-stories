import { StatusBar, View } from "react-native";

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <StatusBar style="auto" />
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFF",
          padding: 20,
          alignItems: "center",
          display: "flex",
        }}
      >
        <Story />
      </View>
    </>
  ),
];
