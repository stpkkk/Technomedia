import CardsHeader from "./CardsHeader";
import CardStories from "./CardStories";
import "../../styles/styletest.scss";

const Card = ({ item, isHidden, handleClick }) => {
  return (
    // <li className={` ${!isHidden ? "second" : "first"}`}>
    <li>
      <CardsHeader item={item} handleClick={handleClick} />
      {!isHidden && <CardStories item={item} isHidden={isHidden} />}
    </li>
  );
};

export default Card;
