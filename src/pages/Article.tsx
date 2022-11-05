import React from "react";
import { Link } from "react-router-dom";
import Homepage from "./Homepage";

import {
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/SplitPage.style";
import {
  StyledPage,
  Header,
  Image,
  Text,
  Span,
  Info,
  InfoItem,
} from "../styles/StyledPage.style";
import { ICardsData } from "../@types/cards";

const Article: React.FC = ({ cardsData }) => {
  return (
    <>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage  />
      {cardsData.map((cardsItem) => {
        if (cardsItem.id === 0) {
          return (
            <SplitPageLeft key={cardsItem.id}>
              <StyledPage margin="44px 21px" color="#272727">
                <Header>{cardsItem.page.title}</Header>
                <Image
                  maxWidth="689px"
                  height="361px"
                  margin="20px 0 20px 0"
                  src={require("../assets/img/" +
                    cardsItem.page.image +
                    ".png")}
                  alt={cardsItem.page.title}
                />
                <Info>
                  <InfoItem>
                    <Span>#Tag(Категория)</Span>
                    <p>{cardsItem.page.tag}</p>
                  </InfoItem>
                  <div>
                    <InfoItem>
                      <Span> Статья подготовлена при поддержке</Span>
                      <a href="https://www.theabyss.com">
                        {cardsItem.page.support}
                      </a>
                    </InfoItem>
                    <InfoItem>
                      <Span paddingBottom="5px">Время чтения</Span>
                      <p>{cardsItem.page.readTime}</p>
                    </InfoItem>
                  </div>
                </Info>
                <Text maxWidth="602px" margin="31px 0 72px 0" lineHeight="111%">
                  {cardsItem.page.subText}
                </Text>
                <h2>{cardsItem.page.subTitle}</h2>
                <Text maxWidth="626px" lineHeight="120%" margin="14px 0 0 0">
                  <p>{cardsItem.page.text}</p>
                </Text>
              </StyledPage>
            </SplitPageLeft>
          );
        }
        return null;
      })}
    </>
  );
};

export default Article;
