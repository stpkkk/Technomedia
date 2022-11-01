import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  SliderStyles,
  SlideTitle,
  SlideDescription,
} from "../../styles/elements/SliderStyles.style";

const Slider = ({ item }) => {
  const [current, setCurrent] = useState(0);
  const delay = 5000;
  useEffect(() => {
    setTimeout(
      () =>
        setCurrent((prevIndex) =>
          prevIndex === item.slider.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [current]);

  return (
    <SliderStyles>
      {item.slider.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <img
                src={require("../../assets/img/" + slide.image + ".png")}
                alt={"article-card"}
              />
            )}
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
          </div>
        );
      })}
    </SliderStyles>
  );
};
export default Slider;
