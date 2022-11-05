//https://mohitk05.github.io/react-insta-stories/
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  CardStoriesStyles,
  StyledStoryTitle,
} from "../../styles/cards/CardStoriesStyles.style";
import Stories, { WithSeeMore } from "react-insta-stories";
import AppContext from "../../context/context";
import { ICardsItem, IStory } from "../../@types/cards";

interface IProps {
  cardsItem: ICardsItem;
}

const CardStories: React.FC<IProps> = ({ cardsItem }) => {
  const [currentId, setCurrentId] = useState(0);

  const { closeCards }: any = useContext(AppContext);
  const stories = cardsItem.stories.map((storiesItem: IStory, index: number) => ({
    content: ({ action, story }) => {
      return (
        <CardStoriesStyles
          key={index}
          //   backgroundImg={require("../../assets/img/" + story.image + ".png")}
        >
          <WithSeeMore story={story} action={action}>
            <img
              src={require("../../assets/img/" + storiesItem.image + ".png")}
              alt={"article-card"}
            />
          </WithSeeMore>
        </CardStoriesStyles>
      );
    },

    seeMore: () => <p>Something goes wrong</p>,
    seeMoreCollapsed: ({ action }) => (
      <StyledStoryTitle>
        <Link to={`${cardsItem.pathName}/${cardsItem.id}`}>
          <h3>{storiesItem.storyTitle}</h3>
          <p>{storiesItem.storyDescription}</p>
        </Link>
      </StyledStoryTitle>
    ),
  }));

  return (
    <CardStoriesStyles>
      <Stories
        key={cardsItem.id}
        width={456}
        height={675}
        currentIndex={currentId}
        keyboardNavigation
        defaultInterval={5000}
        stories={stories}
        loop={false}
        storyContainerStyles={{
          color: "red",
          background: " #333333",
          bottom: 10,
        }}
        onStoryEnd={() => {
          setCurrentId((currentId) => currentId + 1);
        }}
        onAllStoriesEnd={() => {
          setCurrentId((currentId) => 0);
          closeCards();
        }}
        onStoryStart={() => {
          setCurrentId((currentId) => currentId + 1 - 1);
        }}
      />
    </CardStoriesStyles>
  );
};

export default CardStories;
