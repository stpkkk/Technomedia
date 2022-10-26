import React from "react";
import burger from "../assets/img/burger.svg";
import { BurgerContainer } from "../styles/BurgerContainer.style";

const Burger = () => {
  return (
    <BurgerContainer>
      <img src={burger} alt="burger" />
    </BurgerContainer>
  );
};

export default Burger;
