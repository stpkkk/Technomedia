import React from "react";
import burger from "../assets/img/burger.svg";
import { BurgerStyles } from "../styles/BurgerStyles.style";

const Burger = () => {
  return (
    <BurgerStyles >
      <img  src={burger} alt="burger" />
    </BurgerStyles>
  );
};

export default Burger;
