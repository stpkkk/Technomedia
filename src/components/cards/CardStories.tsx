//https://mohitk05.github.io/react-insta-stories/
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  CardStoriesStyles,
  SlideTitle,
} from "../../styles/cards/CardStoriesStyles.style";
import Stories, { WithSeeMore } from "react-insta-stories";
import AppContext from "../../context/context";

const CardStories = ({ cardsItem }) => {
  const [currentId, setCurrentId] = useState(0);

  const { closeCards }: any = useContext(AppContext);

  const stories = cardsItem.slider.map((slide, index: number) => ({
    content: ({ action, story }) => {
      return (
        <CardStoriesStyles
          key={index}
          //   backgroundImg={require("../../assets/img/" + slide.image + ".png")}
        >
          <WithSeeMore story={story} action={action}>
            <img
              src={require("../../assets/img/" + slide.image + ".png")}
              alt={"article-card"}
            />
          </WithSeeMore>
        </CardStoriesStyles>
      );
    },

    seeMore: () => <p>Something goes wrong</p>,
    seeMoreCollapsed: ({ action }) => (
      <SlideTitle>
        <Link to={`${cardsItem.pathName}/${cardsItem.id}`}>
          <h3>{slide.slideTitle}</h3>
          <p>{slide.slideDescription}</p>
        </Link>
      </SlideTitle>
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
