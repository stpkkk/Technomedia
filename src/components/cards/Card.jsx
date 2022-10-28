import CardsHeader from "./CardsHeader";
import CardsBody from "./CardsBody";

const Card = ({ item, isHidden, handleClick }) => {

  return (
    <li key={item.id}>
      <CardsHeader item={item} handleClick={handleClick} />
      {!isHidden && <CardsBody item={item} />}
    </li>
  );
};

export default Card;
