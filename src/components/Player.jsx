//https://github.com/lhz516/react-h5-audio-player
//https://lhz516.github.io/react-h5-audio-player/?path=/story/actions--actions
import AudioPlayer from "react-h5-audio-player";

import cover from "../assets/img/article-card.png";
import { StyledPlayer } from "../styles/elements/StyledAudioPlayer.style";
import "react-h5-audio-player/src/styles.scss";

const Player = ({ media }) => {
  return (
    <StyledPlayer backgroundImg={cover}>
      <AudioPlayer
        src={media.audioTrack.src}
        // eslint-disable-next-line no-console
        onPlay={() => console.log("onPlay")}
        showJumpControls={false}
        customProgressBarSection={[]}
        autoPlayAfterSrcChange={false}
      />
    </StyledPlayer>
  );
};

export default Player;
