import styled from "styled-components";

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.maxWidth};
  flex-wrap: wrap;
`;
