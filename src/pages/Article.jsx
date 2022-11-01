import { Link } from "react-router-dom";
import Homepage from "./Homepage";

import { cardsData } from "../data/cardsData";
import {
  PageStyles,
  Header,
  Image,
  Info,
  InfoItem,
  Text,
  Span,
} from "../styles/homepage/PageStyles.style";

import {
  SplitPage,
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/SplitPage.style";

const Article = () => {
  return (
    <SplitPage>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage />
      {cardsData.map((item) => {
        if (item.id === 0) {
          return (
            <SplitPageLeft key={item.id}>
              <PageStyles>
                <Header maxWidth="100%">{item.page.title}</Header>
                <Image
                  marginTop="20px"
                  marginBottom="20px"
                  maxWidth="689px"
                  height="361px"
                  borderRadius="4px"
                  src={require("../assets/img/" + item.page.image + ".png")}
                  alt={item.page.title}
                />
                <Info>
                  <InfoItem>
                    <Span>#Tag(Категория)</Span>
                    <p>{item.page.tag}</p>
                  </InfoItem>
                  <div>
                    <InfoItem marginBottom="29px">
                      <Span> Статья подготовлена при поддержке</Span>
                      <a href="https://www.theabyss.com">{item.page.support}</a>
                    </InfoItem>
                    <InfoItem>
                      <Span paddingBottom="5px">Время чтения</Span>
                      <p>{item.page.readTime}</p>
                    </InfoItem>
                  </div>
                </Info>
                <Text
                  maxWidth="602px"
                  marginTop="60px"
                  marginBottom="72px"
                  lineHeight="111%"
                >
                  {item.page.subText}
                </Text>
                <h2>{item.page.subTitle}</h2>
                <Text maxWidth="626px" lineHeight="120%" marginTop="14px">
                  <p>{item.page.text}</p>
                </Text>
              </PageStyles>
            </SplitPageLeft>
          );
        }
        return null;
      })}
    </SplitPage>
  );
};

export default Article;
