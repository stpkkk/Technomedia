import { CardsHeaderStyles } from "../../styles/cards/CardsHeader.style";
import CardsSvg from "./CardsSvg";

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
          <CardsSvg fill={item.svgColor} />
        </div>
      </CardsHeaderStyles>
    </div>
  );
};

export default CardsHeader;