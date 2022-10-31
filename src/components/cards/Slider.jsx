import { useState, useEffect } from "react";
import { data } from "../../data/data";
import { Link } from "react-router-dom";
import { imgData } from "../../data/imgData";

import {
  SliderStyles,
  SlideTitle,
  SlideDescription,
} from "../../styles/homepage/cards/SliderStyles.style";

const Slider = ({ item }) => {
  const [current, setCurrent] = useState(0);
  const delay = 5000;

  useEffect(() => {
    setTimeout(
      () =>
        setCurrent((prevIndex) =>
          prevIndex === imgData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [current]);

//   const nextSlide = () => {
//     setCurrent(current === imgData.length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? imgData.length - 1 : current - 1);
//   };

//   if (!Array.isArray(imgData) || imgData.length <= 0) {
//     return null;
//   }
  return (
    <SliderStyles>
      {/* <div className="leftArrow" onClick={prevSlide}>
        <span>b</span>
      </div>
      <div className="rightArrow" onClick={nextSlide}>
        <span>f</span>
      </div> */}

      {imgData.map((slide, index) => {
        //   console.log(slide.image);
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <img
                src={require("../../assets/img/" + slide.image + ".png")}
                alt={slide.title}
              />
            )}
            <Link to={`${item.pathName}/${slide.id}`}>
              <div>
                <SlideTitle>
                  <p>{item.slider.slideTitle}</p>
                </SlideTitle>
                <SlideDescription>
                  <p>{item.slider.slideDescription}</p>
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
