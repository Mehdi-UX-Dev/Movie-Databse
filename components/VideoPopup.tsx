import React from "react";
import ReactPlayer from "react-player/youtube";

const VideoPopup = ({
  show,
  setShow,
  videoId,
  setVideoId,
}: {
  show: any;
  setShow: any;
  videoId: any;
  setVideoId: any;
}) => {
  console.log(show);

  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div
      className={`absolute flex justify-center items-center h-full w-full fixed top-0 left-0 !z-20  ${
        show ? "opacity-100 visible " : "invisible"
      }`}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 backdrop-blur-sm opacity-0 "
        onClick={hidePopup}
      ></div>
      <div className="relative w-[800px] aspect-video bg-white ">
        <span
          className="absolute -top-5 right-0 text-white cursor-pointer"
          onClick={hidePopup}
        >
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"

          // playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPopup;
