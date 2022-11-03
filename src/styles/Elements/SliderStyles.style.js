import styled from "styled-components";

export const SliderStyles = styled.div`
  /* background: url(${(props) => props.backgroundImg}), no-repeat, center; */
  position: relative;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  border-radius: 8px 8px 0 0;
  height: 680px;

  overflow: hidden; // make the content flowing outside the element's box invisible
  top: 10px;

  img {
    object-fit: cover;
    min-width: 456px; //?
    min-height: 654px;
    position: relative;
    margin-top: 18px;
    line-height: 111%;
  }
`;



export const SlideTitle = styled.div`
  p {
    position: absolute;
    top: 510px;
    left: 20px;
    font-size: 25px;
    /* or 28px */
    letter-spacing: -0.01em;
    color: #ffffff;
    max-width: 65%;
  }
`;

export const SlideDescription = styled.div`
  p {
    position: absolute;
    top: 578px;
    left: 20px;
    font-size: 16px;
    color: #ffffff;
    max-width: 65%;
  }
`; //!
