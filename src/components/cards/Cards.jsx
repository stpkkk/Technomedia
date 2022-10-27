import React, { useState } from "react";

import { cardsData } from "../../data/cardsData";
//components
import CardsBody from "./CardsBody";
import CardsHeader from "./CardsHeader";

//styles
import { CardsContainer } from "../../styles/Homepage/cards/CardsContainer.style";

const Cards = () => {
  const cardsHiddenState = cardsData.map((card) => {
    return {
		id: card.id,
		hidden: true,
    };
  });
  //   console.log(cardsHiddenState);
  const [cardsHidden, setCardsHidden] = useState(cardsHiddenState);

  const handleClick = (item) => {
    console.log(cardsHidden);
    setCardsHidden(
      cardsHidden.reduce((acc, card) => {
        if (card.id === item.id) {
          card.hidden = !card.hidden;
        }
        return acc;
      }, cardsHidden)
    );
  };

  return (
    <CardsContainer>
      <ul>
        {cardsData.map((item) => {
          return (
            <li key={item.id}>
              <CardsHeader item={item} handleClick={handleClick} />
              {!cardsHidden[item.id].hidden && <CardsBody item={item} />}
            </li>
          );
        })}
      </ul>
    </CardsContainer>
  );
};

export default Cards;
