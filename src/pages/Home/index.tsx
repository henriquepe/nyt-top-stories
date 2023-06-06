import { ListRenderItemInfo } from "react-native";
import { Container, NewsScrollWrapper } from "./styles";
import { NewsCard } from "../../components/NewsCard";
import { TopStory } from "../../common/models/TopStory";
import { ActivityIndicator, Button } from "react-native-paper";
import { useHome } from "./hooks/use-home";

export function Home() {
  const { handleNewsPress, handleScrollToTop, listRef, topStories, isLoading } =
    useHome();

  return (
    <Container>
      <Button onPress={handleScrollToTop} children="Voltar para o topo" />
      {isLoading ? <ActivityIndicator /> : null}
      <NewsScrollWrapper
        ref={listRef}
        data={topStories}
        renderItem={({ item }: ListRenderItemInfo<TopStory>) => (
          <NewsCard
            title={item.title}
            author={item.byline}
            image={item.multimedia[1].url}
            resume={item.abstract}
            onNewsPress={() => handleNewsPress(item.short_url)}
          />
        )}
        keyExtractor={(item: TopStory) => item.title}
      />
    </Container>
  );
}
