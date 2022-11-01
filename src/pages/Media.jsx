import { Link } from "react-router-dom";
import { data } from "../data/data";
import Homepage from "./Homepage";
import {
  SplitPage,
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/SplitPage.style";
import {
  Header,
  Image,
  Line,
  PageStyles,
  Text,
} from "../styles/homepage/PageStyles.styled";

const Media = () => {
  return (
    <SplitPage>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage />
      {data.map((item) => {
        if (item.id === 2) {
          return (
            <SplitPageLeft key={item.id}>
              <PageStyles>
                <Header>{item.page.title}</Header>
                <Text maxWidth="582px" lineHeight="120%" marginTop="10px">
                  {item.page.text}
                </Text>
                <Line marginTop="60px" marginBottom="13px" />
                <Image
                  src={require("../assets/img/" + item.page.image + ".png")}
                  alt={item.page.title}
                  height="150px"
                  minWidth="150px"
                  borderRadius="5.8px"
                />
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
