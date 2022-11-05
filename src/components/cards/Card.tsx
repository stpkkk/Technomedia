import React from "react";
import CardsHeader from "./CardsHeader";
import CardStories from "./CardStories";
import { ICardsData } from "../../@types/cards";


const Card: React.FC<ICardsData> = ({ cardsItem, isHidden, handleClick }) => {
  return (
    // <li className={` ${!isHidden ? "second" : "first"}`}>
    <li>
      <CardsHeader cardsItem={cardsItem} handleClick={handleClick} />
      {!isHidden && <CardStories cardsItem={cardsItem} />}
    </li>
  );
};

export default Card;
