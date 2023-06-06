import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/Home";
import { Button } from "react-native-paper";
import { useTheme } from "./hooks/use-theme";
import { useNavigation } from "@react-navigation/native";
import { News } from "../pages/News";

const Stack = createNativeStackNavigator();

export function Router({ changeTheme }) {
  const { goBack, canGoBack } = useNavigation();
  const { theme } = useTheme();

  const handleGoBack = () => {
    if (canGoBack()) {
      goBack();
    }
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <Button
            icon="theme-light-dark"
            children="Mudar tema"
            labelStyle={{ color: theme.colors.primary }}
            onPress={changeTheme}
          />
        ),
        headerLeft: () =>
          canGoBack() ? (
            <Button
              icon="arrow-left"
              children="Voltar"
              labelStyle={{ color: theme.colors.primary }}
              onPress={handleGoBack}
            />
          ) : null,

        headerTitle: "",
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
}
