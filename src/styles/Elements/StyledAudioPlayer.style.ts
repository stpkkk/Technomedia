import styled from "styled-components";

type Props = {
  backgroundImg: string;
};

export const StyledPlayer = styled.div<Props>`
  background: url(${(props) => props.backgroundImg});
  width: 150px;
  height: 150px;
  border-radius: 5.8px;
  background-size: 100%;
  position: relative;
  margin-bottom: 20px;
  .rhap_container {
    background: rgba(0, 0, 0, 0);
    box-shadow: none;
  }

  .rhap_main-controls-button {
    color: #ffffff;
    position: absolute;
    top: 35%;
    left: 32%;
  }

  .rhap_play-pause-button {
    font-size: 45px;
    width: 45px;
    height: 45px;
  }
`;
