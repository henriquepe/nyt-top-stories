# nyt-top-stories
Este é um projeto desenvolvido em React Native (versão 0.71.8) e utilizando o Expo.

## Dependências
Este projeto tem as seguintes dependências:

```
"dependencies": {
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/native-stack": "^6.9.12",
    "@testing-library/react-hooks": "^8.0.1",
    "@testing-library/react-native": "^12.1.2",
    "@types/react": "~18.0.27",
    "expo": "~48.0.18",
    "expo-font": "~11.1.1",
    "expo-splash-screen": "~0.18.2",
    "expo-status-bar": "~1.4.4",
    "jest": "^29.2.1",
    "jest-expo": "^48.0.2",
    "react": "18.2.0",
    "react-native": "0.71.8",
    "react-native-paper": "^5.8.0",
    "react-native-safe-area-context": "4.5.0",
    "react-native-screens": "~3.20.0",
    "react-native-webview": "11.26.0",
    "styled-components": "^6.0.0-rc.3",
    "typescript": "^4.9.4"
},
"devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/jest": "^29.5.2"
}
```
React Native: https://reactnative.dev/docs/0.71/getting-started
@react-navigation/native: https://reactnavigation.org/docs/6.x/getting-started
@react-navigation/native-stack: https://reactnavigation.org/docs/6.x/stack-navigator/
@testing-library/react-hooks: https://react-hooks-testing-library.com/
@testing-library/react-native: https://testing-library.com/docs/react-native-testing-library/intro
@types/react: https://www.npmjs.com/package/@types/react
Expo: https://docs.expo.dev/
Expo Font: https://docs.expo.dev/guides/using-custom-fonts/
Expo Splash Screen: https://docs.expo.dev/versions/latest/sdk/splash-screen/
Expo Status Bar: https://docs.expo.dev/versions/latest/sdk/status-bar/
Jest: https://jestjs.io/docs/getting-started
Jest Expo: https://www.npmjs.com/package/jest-expo
React: https://reactjs.org/docs/getting-started.html
React Native Paper: https://callstack.github.io/react-native-paper/index.html
React Native Safe Area Context: https://www.npmjs.com/package/react-native-safe-area-context
React Native Screens: https://github.com/software-mansion/react-native-screens
React Native Webview: https://github.com/react-native-webview/react-native-webview
Styled Components: https://styled-components.com/docs
TypeScript: https://www.typescriptlang.org/docs/
@babel/core: https://babeljs.io/docs/en/
@types/jest: https://www.npmjs.com/package/@types/jest

## Iniciando o Projeto
Siga as etapas abaixo para iniciar o projeto:

### Instale as dependências com YARN:
```
yarn
```

### Execute o projeto utilizando o Expo:

```
npx expo start
```


## Executando Testes Unitários
Para executar os testes unitários, use o script test que já está configurado. Para obter a cobertura de testes, adicione a flag --coverage.

```
yarn test
yarn test --coverage
```


## Estrutura de Pastas

### api: 
Centraliza a chamada à API do New York Times.

### common:
Centraliza hooks, models e alguns utils (arquivos TypeScript que exportam algum método).

### components: 
Centraliza componentes que podem ser utilizados em mais de um lugar dentro da aplicação, seus devidos testes unitários e possíveis hooks próprios.

### contexts: 
Centraliza os contextos que o API context do React pode precisar.

### pages: 
Centraliza as páginas da aplicação, seus devidos testes unitários e possíveis hooks próprios.

**Todas estas pastas estão dentro de uma pasta de nome src.**
**Na raiz existe uma pasta de nome types onde é centralizado as definições de tipos que precisaram de alguma customização ou extensão.**

## Material Design
Essa aplicação foi construída utilizando componentes Material Design, disponibilizados pela biblioteca react-native-paper.
Documentação: https://callstack.github.io/react-native-paper/index.html
