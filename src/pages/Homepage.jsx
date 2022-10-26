import HomepageBody from "../components/HomepageBody";
import Tabs from "../components/Tabs";

import { HomepageContainer } from "../styles/HomepageContainer.style";

const Homepage = () => {
  return (
    <HomepageContainer>
      <HomepageBody />
      <Tabs />
    </HomepageContainer>
  );
};

export default Homepage;
