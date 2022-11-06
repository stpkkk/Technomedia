import styled from "styled-components";

export const StyledPage = styled.div`
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  font-size: 16px;

  a {
    color: #272727;
  }

  h1,
  h2 {
    display: block;
    font-size: 30px;
    line-height: 111%;
    color: #272727;
    letter-spacing: -0.01em;
  }
`;

export const Span = styled("span")`
  padding-bottom: ${(props) => props.paddingBottom};
  color: #959595;
  font-size: 12px;
  line-height: 127%;
  display: block;
`;

export const Image = styled.img`
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  background: #123123;
  object-position: top;
  width: 100%;
  height: auto;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  color: #272727;
`;

export const InfoItem = styled.div`
  margin: 0 239.18px 29px 0;
  font-size: 12px;
  line-height: 127%;
`;

export const Text = styled.div`
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  margin: ${(props) => props.margin};
  padding-bottom: ${(props) => props.paddingBottom};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
`;

export const Header = styled.h1`
  max-width: ${(props) => props.maxWidth};
`;

export const Line = styled.div`
  max-width: 692px;
  border-bottom: solid 1px #b5b5b5;
  margin: ${(props) => props.margin};
`;
