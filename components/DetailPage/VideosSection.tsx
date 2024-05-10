import React, { useState } from "react";

import VideoPopup from "@/components/UI_components/videoPopup/VideoPopup";
import { PlayIcon } from "./Playbtn";
import Image from "next/image";

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
    <div className="videosSection">
      <div className="sectionHeading">Official Videos</div>
      {!loading ? (
        <div className="videos">
          {data?.results?.map((video: any) => (
            <div
              key={video.id}
              className="videoItem"
              onClick={() => {
                setVideoId(video.key);
                setShow(true);
              }}
            >
              <div className="videoThumbnail">
                <Image
                  src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  width={200}
                  height={200}
                  alt=""
                />
                <PlayIcon />
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
