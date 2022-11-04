//TODO css main section p div h123 span...
//TODO TS
// Cards
//  JSON
//TODO Link Sliders
//TODO anime
// audio
//TODO how to dwnld img frm figma(size)
//TODO rename img
//init font size
// word wrap text
// adaptive pages
//TODO app structure
//TODO pathname pages
// wrap columns info
//TODO player button
//TODO refactor Loader

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "./styles/elements/Loader.style";
import Burger from "./components/Burger";
import Homepage from "./pages/Homepage";
import Article from "./pages/Article";
import Course from "./pages/Course";
import Media from "./pages/Media";
import AppContext from "./context/context";

import { GlobalStyles, Container } from "./styles/GlobalStyles.style";

function App() {
  const [loading, setLoading] = useState(false);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/cardsDataBase");

        const jsonData = await res.json();
        setCardsData(jsonData);
        setLoading(false);
      } catch (error) {
        alert("Error to fetch a data :(");
        console.error(error);
        throw error;
      }
    }

    fetchData();
  }, []);
  if (loading) return <Loader />;
  return (
    <AppContext.Provider
      value={{
        cardsData,
      }}
    >
      <GlobalStyles />
      <Burger />
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/article/:id"
            element={<Article cardsData={cardsData} />}
          />
          <Route
            path="/course/:id"
            element={<Course cardsData={cardsData} />}
          />
          <Route path="/media/:id" element={<Media cardsData={cardsData} />} />
        </Routes>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
