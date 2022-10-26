import React from "react";

import { HomepageBodyContainer } from "../styles/HomepageBodyContainer.style";

const HomepageBody = () => {
  return (
    <HomepageBodyContainer>
      <div className="about-site">
        <p>
          Лучше — сайт, который поможет приобрести <br /> и не бросить полезные
          привычки.
          <br /> Бесплатные видеотренировки, аудиомедитации, программы и статьи
          для нормализации сна, питания и развития осознанности.
        </p>
      </div>
      <div className="about-courses">
        <p>
          Наши эксперты подготовили 16 курсов
          <br /> и более 70 статей в 6 категориях:
          <br />
          Фитнес, Питание, Осознанность, Сон, Отдых,
          <br /> Психология и Образ жизни.
          <br />
          Занимайтесь в комфортном темпе.
        </p>
      </div>
    </HomepageBodyContainer>
  );
};

export default HomepageBody;
