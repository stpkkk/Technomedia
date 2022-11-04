import CardsHeader from "./CardsHeader";
import CardStories from "./CardStories";

const Card = ({ item, isHidden, handleClick }) => {
  return (
    <li>
      <CardsHeader item={item} handleClick={handleClick} />
      {!isHidden && <CardStories item={item} isHidden={isHidden} />}
    </li>
  );
};

export default Card;
