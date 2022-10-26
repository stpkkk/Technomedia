import React from "react";
import { TabsContainer } from "../styles/TabsContainer";
import TabSvg from "./TabSvg";
import { tabsData } from "../data/tabsData";

const Tabs = () => {
  return (
    <TabsContainer>
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
    </TabsContainer>
  );
};

export default Tabs;
