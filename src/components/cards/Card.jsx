import CardsHeader from "./CardsHeader";
import CardStories from "./CardStories";

const Card = ({ cardsItem, isHidden, handleClick }) => {
  return (
    <li className={isHidden ? "card-close" : "card-open"}>
      <CardsHeader cardsItem={cardsItem} handleClick={handleClick} />
      {!isHidden && <CardStories cardsItem={cardsItem} />}
    </li>
  );
};

export default Card;
