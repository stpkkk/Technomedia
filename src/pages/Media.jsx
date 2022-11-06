import { useContext } from "react";
import AppContext from "../context/context";
import { Link, useParams } from "react-router-dom";
//components
import Homepage from "./Homepage";
import Player from "../components/Player";
//styles
import {
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/StyledSplitPage.style";
import { Header, Line, StyledPage, Text } from "../styles/StyledPage.style";
import { StyledFlexContainer } from "../styles/elements/StyledFlexContainer.style";

const Media = () => {
  const { cardsData } = useContext(AppContext);
  const { id, storyId } = useParams();
  const currentCard = cardsData.find((item) => item.id === id);
  console.log(cardsData);
  const media = currentCard.pages.find((item) => item.id === storyId);

  return (
    <>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage id={0} hidden={false} />
      <SplitPageLeft key={media.id}>
        <StyledPage margin="44px 21px" color="#272727">
          <Header>{media.title}</Header>
          <Text maxWidth="582px" lineHeight="120%" margin="10px 0 0 0">
            {media.text}
          </Text>
          <Line margin="60px 0 13px 0" />
          <StyledFlexContainer maxWidth="692px">
            <Player media={media} />
          </StyledFlexContainer>
        </StyledPage>
      </SplitPageLeft>
    </>
  );
};

export default Media;
