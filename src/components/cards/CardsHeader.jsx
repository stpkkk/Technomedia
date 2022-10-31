import { CardsHeaderStyles } from "../../styles/homepage/cards/CardsHeader.style";
import CardSvg from "./CardsSvg";

const CardsHeader = ({ item, handleClick }) => {
  return (
    <div>
      <CardsHeaderStyles
        onClick={() => {
          handleClick(item.id);
        }}
      >
        <span>{item.name}</span>
        <CardSvg fill={item.svgColor} />
      </CardsHeaderStyles>
    </div>
  );
};

export default CardsHeader;
