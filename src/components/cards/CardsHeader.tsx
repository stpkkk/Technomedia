import React from "react";
import { StyledCardsHeader } from "../../styles/cards/StyledCardsHeader.style";
import CardsSvg from "./CardsSvg";
import { ICardsItem } from "./../../@types/cards.d";

interface ICardsHeaderProps {
  cardsItem: ICardsItem;
  handleClick: (id: number) => void;
}

const CardsHeader: React.FC<ICardsHeaderProps> = ({
  cardsItem,
  handleClick,
}) => {
  return (
    <div>
      <StyledCardsHeader
        onClick={() => {
          handleClick(cardsItem.id);
        }}
      >
        <div>
          <span>{cardsItem.name}</span>
          <CardsSvg fill={cardsItem.svgColor} />
        </div>
      </StyledCardsHeader>
    </div>
  );
};

export default CardsHeader;
