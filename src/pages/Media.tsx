import React, { useContext } from "react";
import Homepage from "./Homepage";
import Player from "../components/Player";
import { Link } from "react-router-dom";
import AppContext from "../context/context";

import {
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/StyledSplitPage.style";
import { Header, Line, StyledPage, Text } from "../styles/StyledPage.style";
import { StyledFlexContainer } from "../styles/elements/StyledFlexContainer.style";

import { ICardsData } from "../@types/cards";

const Media: React.FC = () => {
  const { cardsData }: any = useContext(AppContext);
  return (
    <>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage id={0} hidden={false} />
      {cardsData.map((cardsItem: ICardsData) => {
        if (cardsItem.id === 2) {
          return (
            <SplitPageLeft key={cardsItem.id}>
              <StyledPage margin="44px 21px" color="#272727">
                <Header>{cardsItem.page.title}</Header>
                <Text maxWidth="582px" lineHeight="120%" margin="10px 0 0 0">
                  {cardsItem.page.text}
                </Text>
                <Line margin="60px 0 13px 0" />
                <StyledFlexContainer maxWidth="692px">
                  <Player item={cardsItem} />
                </StyledFlexContainer>
              </StyledPage>
            </SplitPageLeft>
          );
        }
        return null;
      })}
    </>
  );
};

export default Media;
