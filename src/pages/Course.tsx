import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Homepage from "./Homepage";
import {
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/StyledSplitPage.style";
import {
  StyledPage,
  Header,
  Text,
  Image,
  Info,
  Line,
  InfoItem,
  Span,
} from "../styles/StyledPage.style";
import { ICardsData } from "../@types/cards";
import AppContext from "../context/context";

const Course: React.FC = () => {
  const { cardsData }: any = useContext(AppContext);

  return (
    <>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage id={0} hidden={false} />

      {cardsData.map((cardsItem: ICardsData) => {
        if (cardsItem.id === 1) {
          return (
            <SplitPageLeft key={cardsItem.id}>
              <StyledPage margin="44px 21px" color="#272727">
                <Header maxWidth="40%">{cardsItem.page.title}</Header>
                <Image
                  maxWidth="689px"
                  height="361px"
                  margin="16px 0 16px 0"
                  borderRadius="4px"
                  src={require("../assets/img/" +
                    cardsItem.page.image +
                    ".png")}
                  alt={cardsItem.page.title}
                />
                <Text
                  maxWidth="506px"
                  minHeight="121px"
                  margin="0 0 37px 0"
                  display="block"
                >
                  {cardsItem.page.text}
                </Text>
                <Info>
                  <InfoItem>
                    <Span>#Tag(Категория)</Span>
                    <p>{cardsItem.page.tag}</p>
                  </InfoItem>
                  <InfoItem>
                    <Span>Курс подготовлена при поддержке</Span>
                    <a href="https://www.theabyss.com">
                      {cardsItem.page.support}
                    </a>
                  </InfoItem>
                </Info>
                <Line margin="114px 0 18px 0" />
                <Span>Список уроков</Span>
              </StyledPage>
            </SplitPageLeft>
          );
        }
        return null;
      })}
    </>
  );
};

export default Course;
