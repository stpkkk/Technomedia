//TODO TS
//TODO styled boards
//TODO page animation

import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";

import Burger from "./components/Burger";
import AppContext from "./context/context";
import Article from "./pages/Article";
import Course from "./pages/Course";
import Homepage from "./pages/Homepage";
import Media from "./pages/Media";
import Loader from "./styles/elements/Loader.style";
import { GlobalStyles, Container } from "./styles/GlobalStyles.style";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [cardsData, setCardsData] = useState([]);
  const [hiddenCardsState, setHiddenCardsState] = useState([]);

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
          jsonData.map((item) => {
            return {
              id: item.id,
              hidden: true,
            };
          })
        );
        setLoading(false);
      } catch (error) {
        alert("Error to fetch a data :(");
        // eslint-disable-next-line no-console
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
          <Route
            path="/"
            element={<Homepage id={0} hidden={false} onClick={closeCards} />}
          />
          <Route path="/article/:id/:storyId" element={<Article />} />
          <Route path="/course/:id/:storyId" element={<Course />} />
          <Route path="/media/:id/:storyId" element={<Media />} />
        </Routes>
      </Container>
    </AppContext.Provider>
  );
};

export default App;
