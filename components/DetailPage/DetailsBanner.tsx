"use client";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import useFetch from "@/hooks/useFetch";
import PosterFallback from "@/public/assets/no-poster.png";
import { PlayIcon } from "./Playbtn";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { fetchApiConfig, genresCall } from "@/redux/homeSlice";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VideoPopup from "../VideoPopup";

/**
 *
 * @param video The Video data
 * @param crew  The cast data
 *
 */

const DetailsBanner = ({ video, crew }: { video: any; crew: any }) => {
  const { genres } = useAppSelector((state) => state.home);
  const { url } = useAppSelector((state) => state.home);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchApiConfig());
    dispatch(genresCall());
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const mediaGenres = data?.genres?.map((g: any) => g.id);

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
    <div>
      {!loading ? (
        <>
          {data && url?.backdrop && (
            <>
              <div className="w-full h-[90%]  absolute top-0 left-0 opacity-75 ">
                <Image
                  src={url.backdrop + data.backdrop_path}
                  alt=""
                  fill
                  className="object-cover object-center  "
                />
                <div className="bg-gradient-to-b from-[rgba(4,21,45,0.1)] to-[rgba(4,21,45,1)]    w-full h-full absolute bottom-0 left-0 "></div>
              </div>
              <div className="pt-40  justify-center  flex gap-8  ">
                <div className="z-10">
                  {data.poster_path ? (
                    <Image
                      className="rounded-lg hidden md:block"
                      src={url?.backdrop + data.poster_path}
                      alt=""
                      width={450}
                      height={450}
                    />
                  ) : (
                    <Image
                      alt="Image"
                      className="posterImg"
                      src={PosterFallback}
                      width={450}
                      height={450}
                    />
                  )}
                </div>
                <div className="text-white z-10">
                  <h1 className="text-[3rem] font-bold ">
                    {`${data.name || data.title} (${dayjs(
                      data?.release_date
                    ).format("YYYY")})`}
                  </h1>
                  <p className="text-[1.5rem] text-gray-400 pb-4 ">
                    {data.tagline}
                  </p>
                  <div className="flex flex-wrap  items-center   gap-4">
                    {mediaGenres?.map((g: any) => {
                      const genre =
                        Array.isArray(genres) &&
                        genres?.find(
                          (obj: { id: number; name: string }) => obj.id === g
                        );

                      return (
                        <div
                          key={g}
                          className="bg-blue-500 px-4 py-2  rounded-md text-white whitespace-nowrap"
                        >
                          {genre?.name}
                        </div>
                      );
                    })}
                  </div>
                  <div className=" flex items-center gap-8 mt-8">
                    <div className=" rounded-[50%] p-1 text-2xl bg-gray-950   w-24 h-24 font-bold  stroke-transparent  ">
                      <CircularProgressbar
                        value={data.vote_average.toFixed(1)}
                        maxValue={10}
                        text={data.vote_average.toFixed(1).toString()}
                        styles={buildStyles({
                          pathColor:
                            data.vote_average.toFixed(1) < 5
                              ? "red"
                              : data.vote_average.toFixed(1) < 7
                              ? "orange"
                              : "green",

                          textSize: 32,
                          textColor: "white",
                        })}
                      />
                    </div>
                    <div
                      className="playbtn"
                      onClick={() => {
                        setShow(true);
                        setVideoId(video.key);
                      }}
                    >
                      <div className="flex items-center gap-4 cursor-pointer">
                        <PlayIcon />
                        <span className="text-white text-[1.5rem]">
                          Watch Trailer
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-3xl mt-8">
                    <div className="text-[2.5rem] pb-2">Overview</div>
                    <div className="text-[1.5rem]">{data.overview}</div>
                  </div>

                  <div className="flex gap-4 border-b text-[1.5rem] border-gray-600 py-4 mt-4">
                    {data.status && (
                      <div className="">
                        <span className="font-bold ">Status: </span>
                        <span>{data.status}</span>
                      </div>
                    )}
                    {data.release_date && (
                      <div className="">
                        <span className="font-bold text-[1.5rem] ">
                          Release Date:{" "}
                        </span>
                        <span className="text-[1.5rem]">
                          {dayjs(data.release_date).format("MMM D, YYYY")}
                        </span>
                      </div>
                    )}
                    {data.runtime && (
                      <div className="">
                        <span className="font-bold text-[1.5rem]">
                          Runtime:{" "}
                        </span>
                        <span className="text-[1.5rem]">
                          {toHoursAndMinutes(data.runtime)}
                        </span>
                      </div>
                    )}
                  </div>

                  {director?.length > 0 && (
                    <div className=" text-[1.5rem] border-b border-gray-600 py-4">
                      <span className="font-bold">Director: </span>
                      <span>
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
                    <div className="border-b border-gray-600 py-4 text-[1.5rem]">
                      <span className="font-bold">Writer: </span>
                      <span>
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
                    <div className=" border-b border-gray-600 py-4">
                      <span className="font-bold">Creator: </span>
                      <span>
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
        <div className=" mx-auto  max-w-7xl pt-40 animate-pulse ">
          <div className=" flex gap-8 ">
            <div className="w-64 h-[400px] rounded  bg-blue-950"></div>
            <div className="flex flex-col grow gap-8">
              <div className="bg-blue-950 h-10 w-full"></div>
              <div className="bg-blue-950 h-10 w-full"></div>
              <div className="bg-blue-950 h-10 w-full"></div>
              <div className="bg-blue-950 w-full h-10"></div>
              <div className="bg-blue-950 w-full h-10"></div>
              <div className="bg-blue-950 w-full h-10"></div>
            </div>
          </div>
          <div className="mt-20">
            <div className="flex gap-8">
              <div className="w-40 h-[200px] rounded-lg  bg-blue-950"></div>
              <div className="w-40 h-[200px] rounded-lg  bg-blue-950"></div>
              <div className="w-40 h-[200px] rounded-lg  bg-blue-950"></div>
              <div className="w-40 h-[200px] rounded-lg  bg-blue-950"></div>
              <div className="w-40 h-[200px] rounded-lg  bg-blue-950"></div>
              <div className="w-40 h-[200px] rounded-lg  bg-blue-950"></div>
              <div className="w-40 h-[200px] rounded-lg  bg-blue-950"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
