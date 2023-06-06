module.exports = {
  expo: {
    name: "nyt-news-app",
    slug: "nyt-news-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#092947",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "mightbe.nytnewsapp",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "mightbe.nytnewsapp",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      API_URL: process.env.API_URL,
      API_KEY: process.env.API_KEY,
      eas: {
        projectId: "04f8e71e-dc2e-400d-bd9d-9c7e57f320d6",
      },
    },
  },
};
