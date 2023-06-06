export type RootStackParamList = {
  Home: undefined;
  News: { url: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
