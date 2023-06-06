import { WebViewProps as ReactNativeWebViewProps } from "react-native-webview";

export interface WebViewProps extends ReactNativeWebViewProps {
  url: string;
}
