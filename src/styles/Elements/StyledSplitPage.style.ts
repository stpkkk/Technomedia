import styled from "styled-components";

export const SplitPageLeft = styled.div`
  min-width: 50%;
  top: 0;
  left: 0%;
  background-color: #ffffff;
  z-index: 10;
  position: fixed;
  height: 100%;
  overflow: scroll;
`;

export const SplitPageRight = styled.div`
  width: 50%;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  overflow: hidden; //анимация корзины, чтобы не было скролла

  position: fixed;
  height: 100%;
  opacity: 1; //анимация корзины

  cursor: pointer;
`;
