import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StyledBurger } from "../styles/elements/StyledBurger.style";
import burger from "../assets/img/burger.svg";
import AppContext from "../context/context";

const Burger: React.FC = () => {
  const { closeCards }: any = useContext(AppContext);

  return (
    <Link to="/">
      <StyledBurger onClick={closeCards}>
        <img src={burger} alt="burger" />
      </StyledBurger>
    </Link>
  );
};

export default Burger;
