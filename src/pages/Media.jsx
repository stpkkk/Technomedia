import Homepage from "./Homepage";
import Player from "../components/Player";
import { Link } from "react-router-dom";

import {
  SplitPage,
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/SplitPage.style";
import {
  Header,
  Line,
  PageStyles,
  Text,
} from "../styles/homepage/PageStyles.style";
import { FlexContainer } from "../styles/elements/FlexContainer.style";

const Media = ({ cardsData }) => {
  return (
    <SplitPage>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage />
      {cardsData.map((item) => {
        if (item.id === 2) {
          return (
            <SplitPageLeft key={item.id}>
              <PageStyles>
                <Header>{item.page.title}</Header>
                <Text maxWidth="582px" lineHeight="120%" marginTop="10px">
                  {item.page.text}
                </Text>
                <Line marginTop="60px" marginBottom="13px" />
                <FlexContainer maxWidth="692px">
                  <Player item={item} />
                </FlexContainer>
              </PageStyles>
            </SplitPageLeft>
          );
        }
        return null;
      })}
    </SplitPage>
  );
};

export default Media;
