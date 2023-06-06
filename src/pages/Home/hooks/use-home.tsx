import { useEffect, useRef, useState } from "react";
import { TopStory } from "../../../common/models/TopStory";
import newsApi from "../../../api";
import { useNavigation } from "@react-navigation/native";

export function useHome() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [topStories, setTopStories] = useState<TopStory[]>([]);
  const navigation = useNavigation();
  const listRef = useRef(null);
  const handleGetTopStories = async () => {
    setIsLoading(true);
    const response = await newsApi.getTopStories();
    setTopStories(response.data);
    setIsLoading(false);
  };

  const handleNewsPress = (url: string) => {
    navigation.navigate("News", { url });
  };

  const handleScrollToTop = () => {
    listRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  useEffect(() => {
    handleGetTopStories();
  }, []);

  return { topStories, listRef, handleNewsPress, handleScrollToTop, isLoading };
}
