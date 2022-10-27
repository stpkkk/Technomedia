import { React, useState } from "react";
import { cardsData } from "../../data/cardsData";
//components
import CardsBody from "./CardsBody";
import CardsHeader from "./CardsHeader";

//styles
import { CardsContainer } from "../../styles/Homepage/cards/CardsContainer.style";

const Cards = () => {
  // =====
  //   const cardsHiddenState = cardsData.map((card) => ({
  //     hidden: false,
  //     id: card.id,
  //   }));
  //   const [cardsHidden, setCardsHidden] = useState(cardsHiddenState);//amos

  const [cardOpen, setCardOpen] = useState(false);

  return (
    <CardsContainer>
      <ul>
        {cardsData.map((item) => {
          // =====
          //   const handleClick = (item) => {
          //     setCardsHidden(
          //       cardsHidden.reduce((acc, card) => {
          //         // console.log("item:", item)
          //         // console.log("card:", card)
          //         if (card.id === item.id) {
          //           card.hidden = !card.hidden;
          //         }
          //         return acc;
          //       }, cardsHidden)
          //     );
          //   }; amos

          const handleClick = () => {
            setCardOpen((prev) => !prev);
          };

          return (
            <li key={item.id}>
              <CardsHeader item={item} handleClick={handleClick} />
              {/* ===== 
               {!cardsHidden.includes(item.id).hidden && (
                <CardsBody item={item} />
              )} amos */}
              {!cardOpen && <CardsBody item={item} />}
            </li>
          );
        })}
      </ul>
    </CardsContainer>
  );
};

export default Cards;
