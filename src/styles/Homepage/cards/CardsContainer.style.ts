import styled from "styled-components";

export const CardsContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 1440px;

  ul {

    display: flex;
    margin: 0 20px 0 20px;
    li {
      list-style: none;
      width: 33.3%;
      background: #333333;
      border-radius: 8px 8px 0px 0px;
      margin-right: 16px;
      cursor: pointer;
    }

    li:last-child {
      margin-right: 0;
    }
  }
`;