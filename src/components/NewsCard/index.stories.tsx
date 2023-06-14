import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";

import { NewsCard } from "./index";
import { Alert } from "react-native";

export default {
  title: "Example/NewsCard",
  component: NewsCard,
} as ComponentMeta<typeof NewsCard>;

const Template: ComponentStory<typeof NewsCard> = (args) => (
  <NewsCard {...args} />
);

export const WithNewsCard = Template.bind({});

WithNewsCard.storyName = "NewsCard Component";
WithNewsCard.args = {
  image: "https://picsum.photos/700",
  title: "Título de uma notícia",
  author: "Autor da notícia",
  resume: "Resumo da notícia",
  onNewsPress: () => Alert.alert("News pressed"),
};
