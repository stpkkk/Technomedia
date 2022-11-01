//https://github.com/lhz516/react-h5-audio-player
//https://lhz516.github.io/react-h5-audio-player/?path=/story/actions--actions
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import { CustomPlayer } from "../styles/elements/CustomAudioPlayer.style";
import cover from "../assets/img/article-card.png";

const Player = ({ item }) => {
  return (
    <CustomPlayer backgroundImg={cover}>
      <AudioPlayer
        src={item.page.audioTrack.src}
        onPlay={(e) => console.log("onPlay")}
        showJumpControls={false}
        customProgressBarSection={[]}
        customControlsSection={["MAIN_CONTROLS"]} //delete to show control buttons
        autoPlayAfterSrcChange={false}
      />
    </CustomPlayer>
  );
};

export default Player;
