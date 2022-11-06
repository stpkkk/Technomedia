import React from "react";
import CardsHeader from "./CardsHeader";
import CardStories from "./CardStories";
import { ICardsItem } from "../../@types/cards";

interface IProps {
  cardsItem: ICardsItem;
  isHidden: boolean;
  handleClick: (id: number) => void;
}

const Card: React.FC<IProps> = ({ cardsItem, isHidden, handleClick }) => {
  return (
    <li className={isHidden ? "card-open" : "card"}>
      <CardsHeader cardsItem={cardsItem} handleClick={handleClick} />
      {!isHidden && <CardStories cardsItem={cardsItem}/>}
    </li>
  );
};

export default Card;
