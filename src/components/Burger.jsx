import React from "react";
import burger from "../assets/img/burger.svg";
import { BurgerStyles } from "../styles/Elements/BurgerStyles.style";
import { Link } from "react-router-dom";

const Burger = () => {
  return (
    <Link to="/">
      <BurgerStyles>
        <img src={burger} alt="burger" />
      </BurgerStyles>
    </Link>
  );
};

export default Burger;
