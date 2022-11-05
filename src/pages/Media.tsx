import React from "react";
import Homepage from "./Homepage";
import Player from "../components/Player";
import { Link } from "react-router-dom";

import {
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/SplitPage.style";
import { Header, Line, StyledPage, Text } from "../styles/StyledPage.style";
import { FlexContainer } from "../styles/elements/FlexContainer.style";

const Media: React.FC = ({ cardsData }) => {
  return (
    <>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage />
      {cardsData.map((item) => {
        if (item.id === 2) {
          return (
            <SplitPageLeft key={item.id}>
              <StyledPage margin="44px 21px" color="#272727">
                <Header>{item.page.title}</Header>
                <Text maxWidth="582px" lineHeight="120%" margin="10px 0 0 0">
                  {item.page.text}
                </Text>
                <Line margin="60px 0 13px 0" />
                <FlexContainer maxWidth="692px">
                  <Player item={item} />
                </FlexContainer>
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