import { WebView } from "../../components/WebView";
import { useNews } from "./hooks/use-news";

export function News() {
  const { url } = useNews();
  return <WebView url={url} />;
}
