import React from "react";

//styles
import { CardsBodyStyles } from "../../styles/Homepage/cards/CardsBodyStyles.style";

const CardsBody = ({item}) => {
  return (
	  <CardsBodyStyles>
      <img
        src={require("../../assets/img/" + item.image + ".png")}
        alt={item.title}
      />
    </CardsBodyStyles>
  );
};

export default CardsBody;
