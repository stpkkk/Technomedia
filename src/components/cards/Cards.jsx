import { useState, useContext } from "react";
import { CardsContainer } from "../../styles/homepage/cards/CardsContainer.style";
import Card from "./Card";
import AppContext from "../../context/context";

const Cards = () => {
	const { cardsData } = useContext(AppContext);

  //open and close cards
  const initialHiddenCardsState = cardsData.map((item) => {
    return {
      id: item.id,
      hidden: true,
    };
  });
  const [hiddenCardsState, setHiddenCardsState] = useState(
    initialHiddenCardsState
  );

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
    <CardsContainer>
      <ul>
        {cardsData.map((item, index) => {
          return (
            <Card
              key={index}
              isHidden={hiddenCardsState[index].hidden}
              item={item}
              handleClick={handleClick}
            />
          );
        })}
      </ul>
    </CardsContainer>
  );
};

export default Cards;
