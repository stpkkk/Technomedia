import Homepage from "./Homepage";

import { Link } from "react-router-dom";
import { data } from "../data/data";

import {
  SplitPage,
  SplitPageLeft,
  SplitPageRight,
} from "../styles/elements/SplitPage.style";

const Article = () => {
  return (
    <SplitPage>
      <Link to="/">
        <SplitPageRight />
      </Link>
      <Homepage />
      {data.map((item) => {
        if (item.id === 0) {
          return (
            <SplitPageLeft key={item.id}>
              <h2>{item.page.title}</h2>
              <div>
                <img
                  src={require("../assets/img/" + item.page.image + ".png")}
                  alt={item.page.title}
                />
              </div>
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
                <div>
                  <p>
                    Время чтения
                    <span>{item.page.readTime}</span>
                  </p>
                </div>
              </div>
              <div>{item.page.text}</div>
              <div>
                <h2>{item.page.subTitle}</h2>
                <p>{item.page.text}</p>
              </div>
            </SplitPageLeft>
          );
        }
        return null;
      })}
    </SplitPage>
  );
};

export default Article;
