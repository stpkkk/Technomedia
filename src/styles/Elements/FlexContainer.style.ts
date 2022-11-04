import styled from "styled-components";

type Props = {
  maxWidth: string;
};

export const FlexContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.maxWidth};
  flex-wrap: wrap;
`;