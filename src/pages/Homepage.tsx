import React, { useContext } from "react";
import HomepageBody from "../components/HomepageBody";
import Cards from "../components/cards/Cards";
import { ICardsData } from "../@types/cards";
import AppContext from "../context/context";

const Homepage: React.FC = () => {
  const { cardsData }: any = useContext(AppContext);
  return (
    <>
      <HomepageBody />
      <Cards cardsData={cardsData} />
    </>
  );
};

export default Homepage;
