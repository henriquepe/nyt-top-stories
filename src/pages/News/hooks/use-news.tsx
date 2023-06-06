import { useNavigation, useRoute } from "@react-navigation/native";

export function useNews() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { url } = params as { url: string };
  navigation.setOptions({
    headerRight: () => null,
  });

  return { url };
}
