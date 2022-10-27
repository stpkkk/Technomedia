import React from "react";
import Homepage from "./Homepage";

import { Link } from "react-router-dom";
import { SplitPage, SplitPageLeft } from "../styles/Elements/SplitPage.style";

const Articles = () => {
  return (
    <SplitPage>
      <Link to="/">
        <Homepage />
      </Link>
      <SplitPageLeft></SplitPageLeft>
    </SplitPage>
  );
};

export default Articles;

