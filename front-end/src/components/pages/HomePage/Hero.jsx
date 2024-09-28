import Boxes from "./Boxes";
import Teams from "./Teams";
import Collaboration from "./Collaboration";
import Introduction from "./Introduction";
import VideoConferencing from "./VideoConferencing";
import Features from "./Features";
import Coding from "./Parameters";

const Hero = () => {
  return (
    <div className="homeSection text-white font-poppins">
      <Introduction />
      <Coding />
      <Boxes />
      <Teams />
      {/* <Collaboration /> */}
      <VideoConferencing />
      <Features />
    </div>
  );
};

export default Hero;
