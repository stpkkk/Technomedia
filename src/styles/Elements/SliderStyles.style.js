import styled from "styled-components";

export const SliderStyles = styled.div`
  /* background: url(${(props) => props.backgroundImg}), no-repeat, center; */
  position: relative;
  bottom: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 100%; 
  background-size: cover;

  overflow: hidden; //адаптивность слайдера make the content flowing outside the element's box invisible

  img {
    object-fit: cover;
    /* width: 100%; //? */
    min-width: 456px; //?
    height: 654px;
    position: relative;
  }

`;

export const SlideTitle = styled.div`
  p {
    position: absolute;
    top: 510px;
    left: 20px;
    font-size: 25px;
    line-height: 111%;
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
    font-weight: 400;
    font-size: 16px;
    line-height: 111%;
    /* identical to box height, or 18px */
    color: #ffffff;
    max-width: 65%;
  }
`;


