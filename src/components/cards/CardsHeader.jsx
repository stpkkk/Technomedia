import { StyledCardsHeader } from "../../styles/elements/cards/StyledCardsHeader.style";
import CardsSvg from "./CardsSvg";

const CardsHeader = ({ cardsItem, handleClick }) => {
  return (
    <div>
      <StyledCardsHeader
        onClick={() => {
          handleClick(cardsItem.id);
        }}
      >
        <div>
          <span>{cardsItem.name}</span>
          <CardsSvg fill={cardsItem.svgColor} />
        </div>
      </StyledCardsHeader>
    </div>
  );
};

export default CardsHeader;
