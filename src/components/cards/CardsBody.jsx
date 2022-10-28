import { Link } from "react-router-dom";

import {
  CardsBodyStyles,
  SlideTitle,
} from "../../styles/homepage/cards/CardsBodyStyles.style";
import { SlideDescription } from "../../styles/homepage/cards/CardsBodyStyles.style";

const CardsBody = ({ item }) => {
  return (
    <CardsBodyStyles>
      <div>
        <img
          src={require("../../assets/img/" + item.image + ".png")}
          alt={item.title}
        />
      </div>
      <Link to={`${item.pathName}/${item.id}`}>
        <div>
          <SlideTitle>
            <p>{item.slides.slideTitle}</p>
          </SlideTitle>
          <SlideDescription>
            <p>{item.slides.slideDescription}</p>
          </SlideDescription>
        </div>
      </Link>
    </CardsBodyStyles>
  );
};

export default CardsBody;
