import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Stories from "react-insta-stories";
import { StoriesStyles } from "../../styles/elements/StoriesStyles.style";

import {
  SliderStyles,
  SlideTitle,
  SlideDescription,
} from "../../styles/elements/SliderStyles.style";

const CardStories = ({ item, isHidden }) => {
  const [currentId, setCurrentId] = useState(0);
  const stories = item.slider.map((slide, index) => ({
    content: () => {
      return (
        <StoriesStyles key={index}>
          <img
            src={require("../../assets/img/" + slide.image + ".png")}
            alt={"article-card"}
          />
          <Link to={`${item.pathName}/${item.id}`}>
            <div>
              <SlideTitle>
                <p>{slide.slideTitle}</p>
              </SlideTitle>
              <SlideDescription>
                <p>{slide.slideDescription}</p>
              </SlideDescription>
            </div>
          </Link>
        </StoriesStyles>
      );
    },
  }));

  return (
    <SliderStyles>
      <Stories
        key={item.id}
        width={456}
        height={695} //?
        currentIndex={currentId}
        keyboardNavigation
        defaultInterval={5000}
        stories={stories}
        storyContainerStyles={{
          borderRadius: 8,
          color: "red",
          background: " #333333",
          bottom: 10,
        }}
        onStoryEnd={() => {
          setCurrentId((currentId) => currentId + 1);
        }}
        onAllStoriesEnd={() => {
          {
            isHidden = true;
          }
          setCurrentId((currentId) => 0);
        }}
        onStoryStart={() => {
          setCurrentId((currentId) => currentId + 1 - 1);
        }}
      />
    </SliderStyles>
  );
};
export default CardStories;
