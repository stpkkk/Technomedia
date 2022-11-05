

export interface ICardsData {
  item: {
    id: any;
    name: string;
    svgColor: string;
  };
  isHidden: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  map(
    arg0: (item: { id: number; hidden: boolean }) => {
      id: number;
      hidden: boolean;
    }
  ): import("react").SetStateAction<ICardsData>;
}

export type CardsContextType = {
  cardsData: ICardsData[];
};

export type CardsItemType = {
	id: any;
    name: string;
    svgColor: string;
}
