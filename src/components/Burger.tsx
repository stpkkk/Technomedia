import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BurgerStyles } from "../styles/elements/BurgerStyles.style";
import burger from "../assets/img/burger.svg";
import AppContext from "../context/context";

const Burger: React.FC = () => {
  const { closeCards }: any = useContext(AppContext); 

  return (
    <Link to="/">
      <BurgerStyles onClick={closeCards}>
        <img src={burger} alt="burger" />
      </BurgerStyles>
    </Link>
  );
};

export default Burger;
