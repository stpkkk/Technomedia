import React from "react";
import { CardsHeaderStyles } from "../../styles/cards/CardsHeader.style";
import CardsSvg from "./CardsSvg";
import { ICardsHeader } from "../../@types/cards";

const CardsHeader: React.FC<ICardsHeader> = ({ cardsItem, handleClick }) => {
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
