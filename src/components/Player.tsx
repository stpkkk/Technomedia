//https://github.com/lhz516/react-h5-audio-player
//https://lhz516.github.io/react-h5-audio-player/?path=/story/actions--actions
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import { StyledPlayer } from "../styles/elements/StyledAudioPlayer.style";
import cover from "../assets/img/article-card.png";

// interface IPlayer {
//   page: {
//     title: string;
//     text: string;
//     audioTrack: {
//       name: string;
//       src: string;
//     };
//   };
// }

const Player: React.FC = ({ item }: any) => {
  return (
    <StyledPlayer backgroundImg={cover}>
      <AudioPlayer
        src={item.page.audioTrack.src}
        onPlay={() => console.log("onPlay")}
        showJumpControls={false}
        customProgressBarSection={[]}
        autoPlayAfterSrcChange={false}
      />
    </StyledPlayer>
  );
};

export default Player;
