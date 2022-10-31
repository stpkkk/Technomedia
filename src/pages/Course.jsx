import { Link } from "react-router-dom";
import { data } from "../data/data";
import Homepage from "./Homepage";
import {
  SplitPage,
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/SplitPage.style";

const Course = () => {
  return (
    <SplitPage>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage />
      {data.map((item) => {
        if (item.id === 1) {
          return (
            <SplitPageLeft key={item.id}>
              <h2>{item.page.title}</h2>
              <div>
                <img
                  src={require("../assets/img/" + item.page.image + ".png")}
                  alt={item.page.title}
                />
              </div>
              <div>{item.page.text}</div>
              <div>
                <div>
                  <p>"#Tag" {item.page.tag}</p>
                </div>
                <div>
                  <p>
                    Статья подготовлена при поддержке
                    <a href="https://www.theabyss.com">{item.page.support}</a>
                  </p>
                </div>
              </div>
              <div></div>
            </SplitPageLeft>
          );
        }
        return null;
      })}
    </SplitPage>
  );
};

export default Course;
