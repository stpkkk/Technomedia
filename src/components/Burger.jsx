import React from "react";
import burger from "../assets/img/burger.svg"
import "../styles/burger.scss";

const Burger = () => {
  return (
    <div className="burger-container">
      <img src={burger} alt="burger" />
    </div>
  );
};

export default Burger;
