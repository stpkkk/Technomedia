import React from "react";
import { CardsHeaderStyles } from "./../../styles/Homepage/cards/CardsHeader.style";
import CardSvg from "./CardsSvg";

const CardsHeader = ({ item,  handleClick }) => {
  //   const testClick = (event) => {
  //     setShowCard(true);

  //     console.log(item);
  //   };

  return (
    <div>
      {/* <CardsHeaderStyles testClick={() => testClick(item)}> */}
      {/* <CardsHeaderStyles
        onClick={() => {
          handleClick(item);
          setShowCard((prev) => !prev);
        }}
      > */}
      <CardsHeaderStyles onClick={() => {
          handleClick(item);
        }}>
        <span>{item.name}</span>
        <CardSvg fill={item.svgColor} />
      </CardsHeaderStyles>
    </div>
  );
};

export default CardsHeader;
