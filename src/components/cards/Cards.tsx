import React, { useContext } from "react";
import { CardsContainer } from "../../styles/cards/CardsContainer.style";
import Card from "./Card";
import AppContext from "../../context/context";
import "../../styles/styletest.scss";

// import { ICardsData } from "../../@types/cards";

const Cards: React.FC = () => {
  const { cardsData, setHiddenCardsState, hiddenCardsState }: any =
    useContext(AppContext); //😞

  //open and close cards
  const handleClick = (id: number) => {
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
    <CardsContainer>
      <ul>
        {cardsData.map(
          (
            item: { id: any; name: string; svgColor: string },
            index: number
          ) => {
            return (
              <Card
                key={index}
                isHidden={hiddenCardsState[index].hidden}
                cardsItem={item}
                handleClick={handleClick}
              />
            );
          }
        )}
      </ul>
    </CardsContainer>
  );
};

export default Cards;
