import React, { useState } from "react";

import { PlayIcon } from "./Playbtn";
import Image from "next/image";
import VideoPopup from "../VideoPopup";

const VideosSection = ({ data, loading }: { data: any; loading: any }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="grid  justify-center relative">
      <div className="text-[1.5rem] text-white pb-4">Official Videos</div>
      {!loading ? (
        <div className="flex gap-8">
          {data?.results?.slice(0, 4).map((video: any) => (
            <div
              key={video.id}
              className="videoItem"
              onClick={() => {
                setVideoId(video.key);
                setShow(true);
              }}
            >
              <div className="relative  cursor-pointer">
                <Image
                  src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  width={250}
                  height={250}
                  alt=""
                  className="w-80 h-40 rounded-lg"
                />
                <div className="absolute top-[30%] right-[30%]">
                  <PlayIcon />
                </div>
              </div>
              <div className="videoTitle">{video.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="videoSkeleton">
          {loadingSkeleton()}
          {loadingSkeleton()}
          {loadingSkeleton()}
          {loadingSkeleton()}
        </div>
      )}
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
