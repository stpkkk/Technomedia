import burger from "../assets/img/burger.svg";
import { BurgerStyles } from "../styles/elements/BurgerStyles.style";
import { Link } from "react-router-dom";

const Burger = () => {
  return (
    <Link to="/">
      <BurgerStyles>
        <img src={burger} alt="burger" onClick={""} />
      </BurgerStyles>
    </Link>
  );
};

export default Burger;
