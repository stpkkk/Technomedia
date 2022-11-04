//https://mohitk05.github.io/react-insta-stories/
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CardStoriesStyles,
  SlideTitle,
} from "../../styles/elements/CardStoriesStyles.style";
import Stories, { WithSeeMore } from "react-insta-stories";

const CardStories = ({ item, isHidden }) => {
  const [currentId, setCurrentId] = useState(0);
  const stories = item.slider.map((slide, index) => ({
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
      <SlideTitle component={Link}>
        <Link to={`${item.pathName}/${item.id}`}>
          <h3>{slide.slideTitle}</h3>
          <p>{slide.slideDescription}</p>
        </Link>
      </SlideTitle>
    ),
  }));

  return (
    <CardStoriesStyles>
      <Stories
        key={item.id}
        width={456}
        height={675} //?
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
          isHidden = true;
          setCurrentId((currentId) => 0);
        }}
        onStoryStart={() => {
          setCurrentId((currentId) => currentId + 1 - 1);
        }}
      />
    </CardStoriesStyles>
  );
};

export default CardStories;
