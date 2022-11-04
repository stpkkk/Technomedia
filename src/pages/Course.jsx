import { Link } from "react-router-dom";
import Homepage from "./Homepage";
import {
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/SplitPage.style";
import {
  PageStyles,
  Header,
  Text,
  Image,
  Info,
  Line,
  InfoItem,
  Span,
} from "../styles/PageStyles.style";

const Course = ({ cardsData }) => {
  return (
    <>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage />
      {cardsData.map((item) => {
        if (item.id === 1) {
          return (
            <SplitPageLeft key={item.id}>
              <PageStyles margin="44px 21px" color="#272727">
                <Header maxWidth="40%">{item.page.title}</Header>
                <Image
                  maxWidth="689px"
                  height="361px"
                  margin="16px 0 16px 0"
                  borderRadius="4px"
                  src={require("../assets/img/" + item.page.image + ".png")}
                  alt={item.page.title}
                />
                <Text
                  maxWidth="506px"
                  minHeight="121px"
                  margin="0 0 37px 0"
                  display="block"
                >
                  {item.page.text}
                </Text>
                <Info>
                  <InfoItem>
                    <Span>#Tag(Категория)</Span>
                    <p>{item.page.tag}</p>
                  </InfoItem>
                  <InfoItem>
                    <Span>Курс подготовлена при поддержке</Span>
                    <a href="https://www.theabyss.com">{item.page.support}</a>
                  </InfoItem>
                </Info>
                <Line margin="114px 0 18px 0" />
                <Span>Список уроков</Span>
              </PageStyles>
            </SplitPageLeft>
          );
        }
        return null;
      })}
    </>
  );
};

export default Course;
