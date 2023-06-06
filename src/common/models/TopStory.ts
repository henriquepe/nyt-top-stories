export type TopStory = {
  title: string;
  byline: string;
  abstract: string;
  multimedia: Array<{
    url: string;
  }>;
  short_url: string;
};
