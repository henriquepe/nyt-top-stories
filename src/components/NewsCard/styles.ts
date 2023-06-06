import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";

export const Container = styled(Card)`
  width: 350px;
  margin-top: 40px;
  border-radius: 16px;
`;

export const CardTitle = styled(Card.Title).attrs({
  subtitleStyle: {
    paddingVertical: 10,
  },
  titleStyle: {
    paddingVertical: 10,
  },
  titleNumberOfLines: 2,
  subtitleNumberOfLines: 10,
  titleVariant: "titleLarge",
})``;

export const AuthorText = styled(Text)`
  font-size: 12px;
  margin-top: 20px;
`;
