import React from "react";
import HomepageBody from "../components/HomepageBody";
import Tabs from "../components/Tabs";
import "../styles/homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <HomepageBody />
      <Tabs />
    </div>
  );
};

export default Homepage;
