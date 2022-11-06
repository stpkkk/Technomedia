import styled from "styled-components";

export const StyledCardsContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 1440px;

  ul {
    display: flex;
    margin: 0 20px 0 20px;
    align-items: flex-end;

    li {
      list-style: none;
      width: 33.3%;
      background: #333333;
      border-radius: 8px 8px 0px 0px;
      margin-right: 16px;
      height: 53px;
    }

    .card-open {
      height: 728px;
      transition: height 2s ease-out;
    }

    .card-close {
      transition: height 2s ease-out;
    }

    li:last-child {
      margin-right: 0;
    }
  }
`;
