import { useContext } from "react";

import { Link } from "react-router-dom";

import burger from "../assets/img/burger.svg";
import AppContext from "../context/context";
import { StyledBurger } from "../styles/elements/StyledBurger.style";

const Burger = () => {
  const { closeCards } = useContext(AppContext);

  return (
    <Link to="/">
      <StyledBurger onClick={closeCards}>
        <img src={burger} alt="burger" />
      </StyledBurger>
    </Link>
  );
};

export default Burger;
