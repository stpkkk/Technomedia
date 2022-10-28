import { React, useState } from "react";
import { data } from "../../data/data";

import { CardsContainer } from "../../styles/homepage/cards/CardsContainer.style";
import Card from "./Card";

const Cards = () => {
  const initialHiddenCardsState = data.map((item) => {
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
        {data.map((item, index) => {
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
