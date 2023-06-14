import Constants from "expo-constants";
import { TopStory } from "../common/models/TopStory";
import { httpRequestHandler } from "./middlewares/httpRequestHandler";

const API_URL = Constants.manifest.extra.API_URL;
const API_KEY = Constants.manifest.extra.API_KEY;

export const getTopStories = async (): Promise<{
  success: boolean;
  data?: TopStory[];
}> => {
  try {
    const data = await httpRequestHandler({
      method: "GET",
      url: `${API_URL}/arts.json?api-key=${API_KEY}`,
    });
    return {
      success: true,
      data: data.results,
    };
  } catch (error) {
    return {
      success: false,
      data: [],
    };
  }
};

export default {
  getTopStories,
};
