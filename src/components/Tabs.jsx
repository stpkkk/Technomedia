import React from "react";
import "../styles/tabs.scss";
import TabSvg from "./TabSvg";
import { tabsData } from "../data/tabsData";

const Tabs = () => {
  return (
    <div className="tabs-container">
      <ul>
        {tabsData.map((item, index) => {
          return (
            <li key={index}>
              <div>
                {item.name}
                <TabSvg fill={item.svgColor} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
