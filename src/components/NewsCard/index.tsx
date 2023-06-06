import { AuthorText, CardTitle, Container } from "./styles";
import { NewsCardProps } from "./types";
import { Card } from "react-native-paper";

export function NewsCard({
  image,
  title,
  author,
  resume,
  onNewsPress,
}: NewsCardProps) {
  return (
    <Container onPress={onNewsPress}>
      <Card.Cover
        source={{
          uri: image,
        }}
      />
      <CardTitle title={title} subtitle={resume} />
      <Card.Content>
        <AuthorText>{author}</AuthorText>
      </Card.Content>
    </Container>
  );
}
