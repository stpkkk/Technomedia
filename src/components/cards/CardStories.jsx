//https://mohitk05.github.io/react-insta-stories/
import { useState, useContext } from "react";
import AppContext from "../../context/context";
import { Link } from "react-router-dom";
//styles
import {
  StyledCardStories,
  StyledStoryTitle,
} from "../../styles/elements/cards/StyledCardStories.style";
//react-insta-stories package
import Stories, { WithSeeMore } from "react-insta-stories";

const CardStories = ({ cardsItem }) => {
  const [currentId, setCurrentId] = useState(0);

  const { closeCards } = useContext(AppContext);
  const stories = cardsItem.stories.map((storiesItem, index) => ({
    content: ({ action, story }) => {
      return (
        <StyledCardStories key={index}>
          <WithSeeMore story={story} action={action}>
            <img
              src={require("../../assets/img/" + storiesItem.image + ".png")}
              alt={"article-card"}
            />
          </WithSeeMore>
        </StyledCardStories>
      );
    },

    seeMore: () => <p>Something goes wrong</p>,
    seeMoreCollapsed: () => (
      <StyledStoryTitle onClick={closeCards}>
        <Link to={`${cardsItem.pathName}/${cardsItem.id}/${currentId}`}>
          <h3>{storiesItem.storyTitle}</h3>
          <p>{storiesItem.storyDescription}</p>
        </Link>
      </StyledStoryTitle>
    ),
  }));

  return (
    <StyledCardStories>
      <Stories
        key={cardsItem.id}
        width={456}
        height={674}
        currentIndex={currentId}
        keyboardNavigation
        defaultInterval={5000}
        stories={stories}
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
    </StyledCardStories>
  );
};

export default CardStories;
