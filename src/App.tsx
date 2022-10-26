import React from "react";
import "./styles/index.scss";
import Homepage from "./pages/Homepage";
import Burger from "./components/Burger";
function App() {
  return (
    <>
      <Burger />
      <div className="wrapper">
        <Homepage />
      </div>
    </>
  );
}

export default App;
