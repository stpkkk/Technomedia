import React, { useState, createContext, useContext } from "react";
import { ICardsData } from "../@types/cards";
// import AppContext from "./contexttest";

type CardType = {
  cardsData: never[];
  setCardsData: React.Dispatch<React.SetStateAction<never[]>>;
  hiddenCardsState: ICardsData[] | undefined;
  setHiddenCardsState: React.Dispatch<
    React.SetStateAction<ICardsData[] | undefined>
  >;
  closeCards: () => void;
};

type PropsChildren = {
  children?: React.ReactNode;
};

const AppContext = createContext<CardType>({} as CardType);

export const CardsProvider: React.FC<PropsChildren> = ({ children }) => {
  const [cardsData, setCardsData] = useState([]);
  const [hiddenCardsState, setHiddenCardsState] = useState<ICardsData[]>();

  const closeCards = () => {
    setHiddenCardsState(
      hiddenCardsState.map((item) => {
        item.hidden = true;
        return item;
      })
    );
  };
  return (
    <AppContext.Provider
      value={{
        cardsData,
        setCardsData,
        hiddenCardsState,
        setHiddenCardsState,
        closeCards,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default CardsProvider;

export const useCardsData = () => useContext(AppContext);
