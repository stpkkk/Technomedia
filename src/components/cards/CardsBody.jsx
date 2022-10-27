import React from "react";
import { Link } from "react-router-dom";

//styles
import {
  CardsBodyStyles,
  SlideTitle,
} from "../../styles/Homepage/cards/CardsBodyStyles.style";
import { SlideDescription } from "./../../styles/Homepage/cards/CardsBodyStyles.style";

const CardsBody = ({ item }) => {
  return (
    <CardsBodyStyles>
      <div>
        <img
          src={require("../../assets/img/" + item.image + ".png")}
          alt={item.title}
        />
      </div>
      <Link to={`${item.pathName}`}>
        <div>
          <SlideTitle>
            <p>{item.slide.title}</p>
          </SlideTitle>
          <SlideDescription>
            <p>{item.slide.description}</p>
          </SlideDescription>
        </div>
      </Link>
    </CardsBodyStyles>
  );
};

export default CardsBody;
