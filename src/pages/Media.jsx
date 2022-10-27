import React from "react";
import { SplitPage, SplitPageLeft } from "./../styles/Elements/SplitPage.style";
import Homepage from "./Homepage";
import { Link } from "react-router-dom";

const Media = () => {
  return (
    <SplitPage>
      <Link to="/">
        <Homepage />
      </Link>
      <SplitPageLeft></SplitPageLeft>
    </SplitPage>
  );
};

export default Media;
