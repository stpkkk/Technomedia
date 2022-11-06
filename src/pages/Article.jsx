import { useContext } from "react";
import AppContext from "../context/context";
import { Link, useParams } from "react-router-dom";
//components
import Homepage from "./Homepage";
//styles
import {
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/StyledSplitPage.style";
import {
  StyledPage,
  Header,
  Image,
  Text,
  Info,
  Span,
  InfoItem,
} from "../styles/StyledPage.style";
const Article = () => {
  const { cardsData } = useContext(AppContext);

  const { id, storyId } = useParams();
  const currentCard = cardsData.find((item) => item.id === id);
  const article = currentCard.pages.find((item) => item.id === storyId);
  return (
    <>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage id={0} hidden={false} />
      <SplitPageLeft key={id}>
        <StyledPage margin="44px 21px" color="#272727">
          <Header>{article.title}</Header>
          <Image
            maxWidth="689px"
            height="361px"
            margin="20px 0 20px 0"
            src={require("../assets/img/" + article.image + ".png")}
            alt={article.title}
          />
          <Info>
            <InfoItem>
              <Span>#Tag(Категория)</Span>
              <p>{article.tag}</p>
            </InfoItem>
            <div>
              <InfoItem>
                <Span>Статья подготовлена при поддержке</Span>
                <a href="https://www.theabyss.com">{article.support}</a>
              </InfoItem>
              <InfoItem>
                <Span paddingBottom="5px">Время чтения</Span>
                <p>{article.readTime}</p>
              </InfoItem>
            </div>
          </Info>
          <Text maxWidth="602px" margin="31px 0 72px 0" lineHeight="111%">
            {article.subText}
          </Text>
          <h2>{article.subTitle}</h2>
          <Text maxWidth="626px" lineHeight="120%" margin="14px 0 0 0">
            <p>{article.text}</p>
          </Text>
        </StyledPage>
      </SplitPageLeft>
    </>
  );
};

export default Article;
