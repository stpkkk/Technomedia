import { useContext } from "react";

import { Link, useParams } from "react-router-dom";

import AppContext from "../context/context";
import {
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/StyledSplitPage.style";
import {
  StyledPage,
  Header,
  Text,
  Image,
  Line,
  Span,
  Info,
  InfoItem,
} from "../styles/StyledPage.style";
import Homepage from "./Homepage";

const Course = () => {
  const { cardsData } = useContext(AppContext);
  const { id, storyId } = useParams();
  const currentCard = cardsData.find((item) => item.id === id);
  const course = currentCard.pages.find((item) => item.id === storyId);

  return (
    <>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage id={0} hidden={false} />
      <SplitPageLeft key={course.id}>
        <StyledPage margin="44px 21px" color="#272727">
          <Header maxWidth="40%">{course.title}</Header>
          <Image
            maxWidth="689px"
            height="361px"
            margin="16px 0 16px 0"
            borderRadius="4px"
            src={require("../assets/img/" + course.image + ".png")}
            alt={course.title}
          />
          <Text
            maxWidth="506px"
            minHeight="121px"
            margin="0 0 37px 0"
            display="block"
          >
            {course.text}
          </Text>
          <Info>
            <InfoItem>
              <Span>#Tag(Категория)</Span>
              <p>{course.tag}</p>
            </InfoItem>
            <div>
              <InfoItem>
                <Span>Статья подготовлена при поддержке</Span>
                <a href="https://www.theabyss.com">{course.support}</a>
              </InfoItem>
            </div>
          </Info>
          <Line margin="114px 0 18px 0" />
          <Span>Список уроков</Span>
        </StyledPage>
      </SplitPageLeft>
    </>
  );
};

export default Course;
