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
//TODO Loader
//TODO TS handleClick
//TODO on TS

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "./styles/elements/Loader.style";
import Burger from "./components/Burger";
import Homepage from "./pages/Homepage";
import Article from "./pages/Article";
import Course from "./pages/Course";
import Media from "./pages/Media";
import AppContext from "./context/context";

import { GlobalStyles, Container } from "./styles/GlobalStyles.style";
import { ICardsData } from "./@types/cards";



const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [cardsData, setCardsData] = useState<ICardsData[]>([]);
  const [hiddenCardsState, setHiddenCardsState] = useState<ICardsData[]>([]);

  const closeCards = () => {
    setHiddenCardsState(
      hiddenCardsState.map((item) => {
        item.hidden = true;
        return item;
      })
    );
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/cardsDataBase");

        const jsonData = await res.json();
        setCardsData(jsonData);
        setHiddenCardsState(
          jsonData.map((item: { id: number }) => {
            return {
              id: item.id,
              hidden: true,
            };
          })
        );
        setLoading(false);
      } catch (error) {
        alert("Error to fetch a data :(");
        console.error(error);
        throw error;
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <AppContext.Provider
      value={{
        closeCards,
        cardsData,
        hiddenCardsState,
        setHiddenCardsState,
      }}
    >
      <GlobalStyles />
      <Burger />
      <Container>
        <Routes>
          <Route path="/" element={<Homepage id={0} hidden={false}/>} />
          <Route
            path="/article/:id"
            element={<Article/>}
          />
          <Route
            path="/course/:id"
            element={<Course/>}
          />
          <Route path="/media/:id" element={<Media/>} />
        </Routes>
      </Container>
    </AppContext.Provider>
  );
};

export default App;
