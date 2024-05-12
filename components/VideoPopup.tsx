"use client";

import React from "react";
import { FaX } from "react-icons/fa6";
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
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  {
    console.log(videoId);
  }

  return (
    <div
      className={`absolute top-0 left-0  flex justify-center h-full w-full items-center  !z-20 ${
        show ? "block" : "hidden"
      }`}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 backdrop-blur-sm"
        onClick={hidePopup}
      ></div>
      <div className="relative w-[800px] aspect-video bg-white ">
        <div
          className="absolute -top-12  right-0 text-white cursor-pointer"
          onClick={hidePopup}
        >
          <FaX size={48} />
        </div>
        {videoId && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="100%"
            playing={false}
          />
        )}
      </div>
    </div>
  );
};

export default VideoPopup;
