import { Link } from "react-router-dom";
import Homepage from "./Homepage";

import {
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/SplitPage.style";

import {
  PageStyles,
  Header,
  Image,
  Text,
  Span,
  Info,
  InfoItem,
} from "../styles/PageStyles.style";

const Article = ({ cardsData }) => {
  return (
    <>
        <Link to="/">
          <SplitPageRight />
        </Link>
        <Homepage />
        {cardsData.map((item) => {
          if (item.id === 0) {
            return (
              <SplitPageLeft key={item.id}>
                <PageStyles margin="44px 21px" color="#272727">
                  <Header>{item.page.title}</Header>
                  <Image
                    maxWidth="689px"
                    height="361px"
                    margin="20px 0 20px 0"
                    src={require("../assets/img/" + item.page.image + ".png")}
                    alt={item.page.title}
                  />
                  <Info>
                    <InfoItem>
                      <Span>#Tag(Категория)</Span>
                      <p>{item.page.tag}</p>
                    </InfoItem>
                    <div>
                      <InfoItem>
                        <Span> Статья подготовлена при поддержке</Span>
                        <a href="https://www.theabyss.com">
                          {item.page.support}
                        </a>
                      </InfoItem>
                      <InfoItem>
                        <Span paddingBottom="5px">Время чтения</Span>
                        <p>{item.page.readTime}</p>
                      </InfoItem>
                    </div>
                  </Info>
                  <Text
                    maxWidth="602px"
                    margin="31px 0 72px 0"
                    lineHeight="111%"
                  >
                    {item.page.subText}
                  </Text>
                  <h2>{item.page.subTitle}</h2>
                  <Text maxWidth="626px" lineHeight="120%" margin="14px 0 0 0">
                    <p>{item.page.text}</p>
                  </Text>
                </PageStyles>
              </SplitPageLeft>
            );
          }
          return null;
        })}
    </>
  );
};

export default Article;
