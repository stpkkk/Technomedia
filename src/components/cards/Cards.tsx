import React, { useContext } from "react";
import { StyledCardsContainer } from "../../styles/cards/StyledCardsContainer.style";
import Card from "./Card";
import AppContext from "../../context/context";
import { ICardsItem } from "../../@types/cards";

const Cards: React.FC = () => {
  const { cardsData, setHiddenCardsState, hiddenCardsState }: any =
    useContext(AppContext);

  //open and close cards
  const handleClick: (id: number) => void = (id: number) => {
    setHiddenCardsState(
      hiddenCardsState.map((item: { id: number; hidden: boolean }) => {
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
    <StyledCardsContainer >
      <ul>
        {cardsData.map((item: ICardsItem, index: number) => {
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
