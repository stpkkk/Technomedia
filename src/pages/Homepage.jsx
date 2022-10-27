import HomepageBody from "../components/HomepageBody";
import Cards from "../components/cards/Cards";

import { HomepageContainer } from "../styles/Homepage/HomepageContainer.style";

const Homepage = () => {
  return (
    <HomepageContainer>
      <HomepageBody />
      <Cards />
    </HomepageContainer>
  );
};

export default Homepage;
