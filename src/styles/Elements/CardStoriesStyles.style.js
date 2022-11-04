import styled from "styled-components";

export const CardStoriesStyles = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 8px 8px 0 0;
  top: 10px;

  overflow: hidden;
  img {
    position: relative;
    margin-top: 10px;
    width: 100%;
    height: auto;
  }
`;

export const SlideTitle = styled.div`
  position: absolute;
  bottom: 58px;
  left: 20px;
  color: #ffffff;
  letter-spacing: -0.01em;
  a {
    color: #ffffff;
    text-decoration: none;
  }
  h3 {
    font-size: 25px;
    max-width: 75%;
    padding-bottom: 9px;
  }

  p {
    font-size: 16px;
    max-width: 85%;
  }
`;

export const SlideDescription = styled.div``;
