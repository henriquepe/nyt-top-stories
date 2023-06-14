import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";

import { Button } from "react-native-paper";
import { Alert } from "react-native";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const WithButton = Template.bind({});

WithButton.storyName = "React Native Paper Button";
WithButton.args = {
  children: "Voltar para o topo",
  onPress: () => Alert.alert("Button pressed"),
};
