export interface ICardsData {
  id: number;
  name: string;
  pathName: string;
  svgColor: string;
  image: string;
  hidden: boolean;
  stories: [];
  page: [];
}

// export type CardsContextType = {
//   cardsData: ICardsData[];
// };

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
