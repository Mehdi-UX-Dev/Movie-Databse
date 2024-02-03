"use client";
import React, { useState } from "react";
import dayjs from "dayjs";

import useFetch from "@/hooks/useFetch";
import Genres from "@/components/UI_components/genres/Genres";
import CircleRating from "@/components/UI_components/circleRating/CircleRating";
import PosterFallback from "@/public/assets/no-poster.png";
import { PlayIcon } from "./Playbtn";
import VideoPopup from "@/components/UI_components/videoPopup/VideoPopup";
import { useParams } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";

const DetailsBanner = ({ video, crew }: { video: any; crew: any }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useAppSelector((state) => state.home);

  const _genres = data?.genres?.map((g: any) => g.id);

  const director = crew?.filter((f: any) => f.job === "Director");
  const writer = crew?.filter(
    (f: any) =>
      f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes: any) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="w-full h-full relative   ">
      {!loading ? (
        <>
          {!!data && url?.backdrop && (
            <>
              <div className="w-full h-screen  absolute top-0 left-0 overflow-hidden opacity-50 ">
                <Image
                  src={url.backdrop + data.backdrop_path}
                  alt=""
                  fill
                  className="object-cover object-center  "
                />
                <div className="bg-black bg-opacity-40 backdrop-blur-sm  w-full h-full absolute bottom-0 left-0 "></div>
              </div>
              <div className="pt-20 max-w-6xl mx-auto flex gap-8  ">
                <div className="">
                  {data.poster_path ? (
                    <Image
                      className="rounded-lg z-20"
                      src={url?.backdrop + data.poster_path}
                      alt=""
                      width={350}
                      height={450}
                    />
                  ) : (
                    <Image
                      alt=""
                      className="posterImg"
                      src={PosterFallback}
                      width={450}
                      height={450}
                    />
                  )}
                </div>
                <div className="text-white z-10">
                  <div className="text-[2rem] font-bold ">
                    {`${data.name || data.title} (${dayjs(
                      data?.release_date
                    ).format("YYYY")})`}
                  </div>
                  <div className="text-[1.25rem] text-gray-400 ">
                    {data.tagline}
                  </div>

                  <div className="mt-2">
                    <Genres data={_genres} />
                  </div>
                  <div className=" mt-16 flex items-center gap-8">
                    <CircleRating rating={data.vote_average.toFixed(1)} />
                    <div
                      className="playbtn"
                      onClick={() => {
                        setShow(true);
                        setVideoId(video.key);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <PlayIcon />
                        <span className="text-white">Watch Trailer</span>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-3xl">
                    <div className="text-[1.5rem] ">Overview</div>
                    <div className="">{data.overview}</div>
                  </div>

                  <div className="flex gap-4 border-b border-gray-600 pb-2 mt-4">
                    {data.status && (
                      <div className="">
                        <span className="font-bold">Status: </span>
                        <span className="text-gray-500">{data.status}</span>
                      </div>
                    )}
                    {data.release_date && (
                      <div className="infoItem">
                        <span className="font-bold ">Release Date: </span>
                        <span className="text-gray-500">
                          {dayjs(data.release_date).format("MMM D, YYYY")}
                        </span>
                      </div>
                    )}
                    {data.runtime && (
                      <div className="infoItem">
                        <span className="font-bold">Runtime: </span>
                        <span className="text-gray-500">
                          {toHoursAndMinutes(data.runtime)}
                        </span>
                      </div>
                    )}
                  </div>

                  {director?.length > 0 && (
                    <div className=" border-b border-gray-600 pb-2">
                      <span className="font-bold">Director: </span>
                      <span className="text-gray-500">
                        {director?.map((d: any, i: any) => (
                          <span key={i}>
                            {d.name}
                            {director.length - 1 !== i && ", "}
                          </span>
                        ))}
                      </span>
                    </div>
                  )}

                  {writer?.length > 0 && (
                    <div className="border-b border-gray-600 pb-2">
                      <span className="font-bold">Writer: </span>
                      <span className="text-gray-500">
                        {writer?.map((d: any, i: any) => (
                          <span key={i}>
                            {d.name}
                            {writer.length - 1 !== i && ", "}
                          </span>
                        ))}
                      </span>
                    </div>
                  )}

                  {data?.created_by?.length > 0 && (
                    <div className=" border-b border-gray-600 pb-2">
                      <span className="font-bold">Creator: </span>
                      <span className="text-gray-500">
                        {data?.created_by?.map((d: any, i: any) => (
                          <span key={i}>
                            {d.name}
                            {data?.created_by.length - 1 !== i && ", "}
                          </span>
                        ))}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
              />
            </>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <div className="left skeleton"></div>
          <div className="right">
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
