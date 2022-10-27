import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import Burger from "./components/Burger";
import Homepage from "./pages/Homepage";
import Articles from "./pages/Articles";
import Courses from "./pages/Courses";
import Media from "./pages/Media";
//styles
import { Container } from "./styles/GlobalContainer.style";
import { GlobalStyles } from "./styles/GlobalStyles.style";

function App() {
  return (
    <>
      <GlobalStyles />
      <Burger />
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
