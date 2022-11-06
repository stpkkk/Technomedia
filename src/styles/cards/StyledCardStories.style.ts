import styled from "styled-components";

export const StyledCardStories = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 8px 8px 0 0;
  top: 10px;
  /* transition: transform 3s ease-out;
  transform: translateY(-10%); */
  overflow: hidden;

  img {
    position: relative;
    margin-top: 10px;
    width: 100%;
  }
`;

export const StyledStoryTitle = styled.div`
  position: absolute;
  bottom: 58px;
  margin-left: 20px;
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
