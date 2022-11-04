import { Link } from "react-router-dom";
import { BurgerStyles } from "../styles/elements/BurgerStyles.style";
import burger from "../assets/img/burger.svg";

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
