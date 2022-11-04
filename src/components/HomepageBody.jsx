import { PageStyles, Text } from "../styles/PageStyles.style";

const HomepageBody = () => {
  return (
    <PageStyles margin="39.24px 20px" color="#e5e5e5">
      <Text
        maxWidth="1080px"
        paddingBottom="50px"
        fontSize="45px"
        lineHeight="111%"
        letterSpacing="-0.01em"
      >
        <p>
          Лучше — сайт, который поможет приобрести <br /> и не бросить полезные
          привычки.
          <br /> Бесплатные видеотренировки, аудиомедитации, программы и статьи
          для нормализации сна, питания и развития осознанности.
        </p>
      </Text>
      <Text
        maxWidth="600px"
        fontSize="21px"
        lineHeight="111%"
        letterSpacing="-0.01em"
      >
        <p>
          Наши эксперты подготовили 16 курсов
          <br /> и более 70 статей в 6 категориях:
          <br />
          Фитнес, Питание, Осознанность, Сон, Отдых,
          <br /> Психология и Образ жизни.
          <br />
          Занимайтесь в комфортном темпе.
        </p>
      </Text>
    </PageStyles>
  );
};

export default HomepageBody;
