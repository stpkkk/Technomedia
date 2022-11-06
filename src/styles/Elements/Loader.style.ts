import styled from "styled-components";

const Loader = styled.div`
  position: relative;
  left: 50%;
  margin-top: 20%;
  width: 100px;
  height: 100px;

  :before,
  :after {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 0;
    background: radial-gradient(circle 10px, rgb(125, 206, 139) 94%, #0000),
      repeating-conic-gradient(
        from -30deg,
        #0000 0 60deg,
        rgb(125, 206, 139) 61deg 120deg
      );
    -webkit-mask: radial-gradient(
      circle 15px,
      #000 calc(100% - 6px),
      #0000 calc(100% - 5px) 94%,
      #000
    );
  }

  :after {
    animation: pl4 1s infinite;
    transform: perspective(300px) translateZ(0px);
  }

  @keyframes pl4 {
    to {
      transform: perspective(300px) translateZ(150px);
      opacity: 0;
    }
  }
`;

export default Loader;
