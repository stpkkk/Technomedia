import styled from "styled-components";

export const SplitPage = styled.div`
  height: 100%;
  position: fixed;
  overflow-x: hidden;
`;

export const SplitPageLeft = styled.div`
  width: 50%;
  top: 0;
  left: 0;
  background-color: #ffffff;
  z-index: 1;
  position: fixed;
  height: 100%;
  color: #111;
`;

export const SplitPageRight = styled.div`
  width: 50%;
  top: 0;
  right: 0;
  background: #111;
  opacity: 0.5;
  z-index: 1;
  position: fixed;
  height: 100%;
  cursor: pointer;
`;
