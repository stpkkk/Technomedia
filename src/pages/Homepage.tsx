import React from "react";
import HomepageBody from "../components/HomepageBody";
import Cards from "../components/cards/Cards";

interface IHomepage {
  id: number;
  hidden: boolean;
}

const Homepage: React.FC<IHomepage> = () => {
  return (
    <>
      <HomepageBody />
      <Cards />
    </>
  );
};

export default Homepage;
