import React from "react";
import CardsHeader from "./CardsHeader";
import CardStories from "./CardStories";
import { ICardsItem } from "../../@types/cards";

interface IProps {
  cardsItem: ICardsItem;
  isHidden: boolean;
  handleClick: any;//😞
}

const Card: React.FC<IProps> = ({ cardsItem, isHidden, handleClick }) => {
  return (
    // <li className={` ${!isHidden ? "second" : "first"}`}>
    <li>
      <CardsHeader cardsItem={cardsItem} handleClick={handleClick} />
	  {!isHidden && <CardStories cardsItem={cardsItem} />}
    </li>
  );
};

export default Card;
