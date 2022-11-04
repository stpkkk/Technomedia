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
        <div>
          <span>{item.name}</span>
          <CardSvg fill={item.svgColor} />
        </div>
      </CardsHeaderStyles>
    </div>
  );
};

export default CardsHeader;
