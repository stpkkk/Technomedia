import React from "react";
import { CardsHeaderStyles } from "../../styles/cards/CardsHeader.style";
import CardsSvg from "./CardsSvg";
import { ICardsItem } from "./../../@types/cards.d";

interface ICardsHeaderProps {
  cardsItem: ICardsItem;
  handleClick: any;
}

const CardsHeader: React.FC<ICardsHeaderProps> = ({
  cardsItem,
  handleClick,
}) => {
  return (
    <div>
      <CardsHeaderStyles
        onClick={() => {
          handleClick(cardsItem.id);
        }}
      >
        <div>
          <span>{cardsItem.name}</span>
          <CardsSvg fill={cardsItem.svgColor} />
        </div>
      </CardsHeaderStyles>
    </div>
  );
};

export default CardsHeader;
