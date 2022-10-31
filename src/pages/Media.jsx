import { Link } from "react-router-dom";
import { data } from "../data/data";
import Homepage from "./Homepage";
import {
  SplitPage,
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/SplitPage.style";

const Media = () => {
  return (
    <SplitPage>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage />
      {data.map((item) => {
        if (item.id === 2) {
          return (
            <SplitPageLeft key={item.id}>
              <h2>{item.page.title}</h2>
              <p>{item.page.text}</p>
              <div>
                {/* <img
                  src={require("../assets/img/" + item.page.image + ".png")}
                  alt={item.page.title}
                /> */}
              </div>
            </SplitPageLeft>
          );
        }
        return null;
      })}
    </SplitPage>
  );
};

export default Media;
