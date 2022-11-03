import styled from "styled-components";

export const StoriesStyles = styled.div`
  /* background: url(${(props) => props.backgroundImg}), no-repeat, center; */
  position: relative;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  border-radius: 8px 8px 0 0;
  overflow: hidden; // make the content flowing outside the element's box invisible

  img {
    object-fit: cover;
    min-width: 456px; //?
    min-height: 654px;
    position: relative;
    line-height: 111%;
  }
`;

export const SlideTitle = styled.div`
  position: absolute;
  top: 510px;
  left: 20px;
  font-size: 25px;
  /* or 28px */
  letter-spacing: -0.01em;
  color: #ffffff;
  max-width: 65%;
`;

export const SlideDescription = styled.div`
  position: absolute;
  top: 578px;
  left: 20px;
  font-size: 16px;
  color: #ffffff;
  max-width: 65%;
`;
