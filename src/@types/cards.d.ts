export interface ICardsData {
  id: number;
  name: string;
  pathName: string;
  svgColor: string;
  image: string;
  hidden: boolean;
  stories: [];
  page: {
    title: string;
    tag: string;
    image: string;
    support: string;
    readTime: string;
    subTitle: string;
    subText: string;
    text: string;
  };
}

export interface ICardsItem {
  stories: [];
  id: any;
  name: string;
  svgColor: string;
  pathName: string;
  image: any;
}

export interface IStory {
  image: string;
  storyTitle: string;
  storyDescription: string;
}

export interface IPage {
  title: string;
  tag: string;
  image: string;
  support: string;
  readTime: string;
  subTitle: string;
  subText: string;
  text: string;
}
