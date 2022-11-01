import { Link } from "react-router-dom";
import { cardsData } from "../data/cardsData";
import Homepage from "./Homepage";
import {
  SplitPage,
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
} from "../styles/homepage/PageStyles.style";

const Course = () => {
  return (
    <SplitPage>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage />
      {cardsData.map((item) => {
        if (item.id === 1) {
          return (
            <SplitPageLeft key={item.id}>
              <PageStyles>
                <Header maxWidth="40%">{item.page.title}</Header>
                <Image
                  marginTop="16px"
                  marginBottom="17px"
                  maxWidth="689px"
                  height="361px"
                  borderRadius="4px"
                  src={require("../assets/img/" + item.page.image + ".png")}
                  alt={item.page.title}
                />
                <Text
                  maxWidth="506px"
                  minHeight="121px"
                  display="block"
                  marginBottom="37px"
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
                <Line marginBottom="18px" marginTop="114px" />
                <Span>Список уроков</Span>
              </PageStyles>
            </SplitPageLeft>
          );
        }
        return null;
      })}
    </SplitPage>
  );
};

export default Course;
