import HomepageBody from "../components/HomepageBody";
import Cards from "../components/cards/Cards";

const Homepage = ({ cardsData }) => {
  return (
    <>
      <HomepageBody />
      <Cards cardsData={cardsData} />
    </>
  );
};

export default Homepage;
