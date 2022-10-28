import {
  HomepageBodyStyles,
  Description,
  About,
} from "../styles/homepage/HomepageBodyStyles.style";

const HomepageBody = () => {
  return (
    <HomepageBodyStyles>
      <About>
        <p>
          Лучше — сайт, который поможет приобрести <br /> и не бросить полезные
          привычки.
          <br /> Бесплатные видеотренировки, аудиомедитации, программы и статьи
          для нормализации сна, питания и развития осознанности.
        </p>
      </About>
      <Description>
        <p>
          Наши эксперты подготовили 16 курсов
          <br /> и более 70 статей в 6 категориях:
          <br />
          Фитнес, Питание, Осознанность, Сон, Отдых,
          <br /> Психология и Образ жизни.
          <br />
          Занимайтесь в комфортном темпе.
        </p>
      </Description>
    </HomepageBodyStyles>
  );
};

export default HomepageBody;
