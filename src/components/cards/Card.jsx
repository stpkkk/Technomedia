import CardsHeader from "./CardsHeader";
import Slider from "./Slider";

const Card = ({ item, isHidden, handleClick }) => {
  return (
    <li>
      <CardsHeader item={item} handleClick={handleClick} />
      {!isHidden && <Slider item={item} />}
    </li>
  );
};

export default Card;
