import React from "react";
import { SplitPage, SplitPageLeft } from "./../styles/Elements/SplitPage.style";
import { Link } from "react-router-dom";
import Homepage from "./Homepage";

const Courses = () => {
  return (
    <SplitPage>
      <Link to="/">
        <Homepage />
      </Link>
      <SplitPageLeft></SplitPageLeft>
    </SplitPage>
  );
};

export default Courses;
