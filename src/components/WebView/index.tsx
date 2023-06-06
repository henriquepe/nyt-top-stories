import { WebView as ReactNativeWebView } from "react-native-webview";
import { WebViewProps } from "./types";

export function WebView({ url }: WebViewProps) {
  return (
    <ReactNativeWebView
      testID="webview"
      originWhitelist={["*"]}
      source={{ uri: url }}
      style={{
        flex: 1,
      }}
    />
  );
}
