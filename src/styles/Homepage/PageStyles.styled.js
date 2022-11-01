import styled from "styled-components";

export const PageStyles = styled.div`
  margin: 44px 21px;
  color: #272727;
  font-size: 16px;
  line-height: 111%;
  /* or 18px */

  a {
    color: #272727;
    text-decoration: underline;
  }

  h1,
  h2 {
    font-size: 30px;
    font-weight: normal;
    letter-spacing: -0.01em;
    display: block;
    line-height: 111%;
	color: #272727;
  }
`;

export const Span = styled.span`
  color: #959595;
  font-size: 12px;
  line-height: 127%;
  display: block;
  padding-bottom: ${(props) => props.paddingBottom};
`;

export const Image = styled.img`
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  margin-bottom: ${(props) => props.marginBottom};
  margin-right: 26px;
  margin-top: ${(props) => props.marginTop};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  object-fit: cover;
  background: #ffffff;
  object-position: top;
`;

export const Info = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 127%;
  min-height: ${(props) => props.minHeight};
`;
export const InfoItem = styled.div`
  margin-right: 239.18px;
  margin-bottom: ${(props) => props.marginBottom};
`;

export const Text = styled.div`
  margin-top: ${(props) => props.marginTop};
  max-width: ${(props) => props.maxWidth};
  display: ${(props) => props.block};
  min-height: ${(props) => props.minHeight};
  margin-bottom: ${(props) => props.marginBottom};
  line-height: ${(props) => props.lineHeight};
`;

export const Header = styled.h1`
  max-width: ${(props) => props.maxWidth};
`;

export const Line = styled.div`
  max-width: 692px;
  margin-top: ${(props) => props.marginTop};
  border-bottom: solid 1px #b5b5b5;
  margin-bottom: ${(props) => props.marginBottom};
`;
