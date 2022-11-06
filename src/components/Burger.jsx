import { useContext } from "react";
import AppContext from "../context/context";
import { Link } from "react-router-dom";
//styles
import { StyledBurger } from "../styles/elements/StyledBurger.style";
//img
import burger from "../assets/img/burger.svg";

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
