//TODO css main section p div h123 span...
//TODO TS
//TODO Cards
//TODO JSON
//TODO Sliders
//TODO anime
//TODO audio
//TODO how to dwnld img frm figma(size)
//TODO rename img
//TODO init font size
//TODO word wrap text
//TODO adaptive pages
//TODO app structure

import { Route, Routes } from "react-router-dom";
// import { useState } from "react";

import Burger from "./components/Burger";
import Homepage from "./pages/Homepage";
import Article from "./pages/Article";
import Course from "./pages/Course";
import Media from "./pages/Media";

import { GlobalStyles, Container } from "./styles/GlobalStyles.style";

function App() {

  return (
    <>
      <GlobalStyles />
      <Burger />
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/media/:id" element={<Media />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
