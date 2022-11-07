import { useContext } from "react";

import AppContext from "../../context/context";
import { StyledCardsContainer } from "../../styles/elements/cards/StyledCardsContainer.style";
import Card from "./Card";

const Cards = () => {
  const { cardsData, setHiddenCardsState, hiddenCardsState } =
    useContext(AppContext);

  //open and close cards
  const handleClick = (id) => {
    setHiddenCardsState(
      hiddenCardsState.map((item) => {
        if (item.id === id) {
          item.hidden = !item.hidden;
        } else {
          item.hidden = true;
        }
        return item;
      })
    );
  };

  return (
    <StyledCardsContainer>
      <ul>
        {cardsData.map((item, index) => {
          return (
            <Card
              key={index}
              isHidden={hiddenCardsState[index].hidden}
              cardsItem={item}
              handleClick={handleClick}
            />
          );
        })}
      </ul>
    </StyledCardsContainer>
  );
};

export default Cards;
