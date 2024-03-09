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

  console.log(url);

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
    <div className="w-full h-full relative">
      {!loading ? (
        <div>{data && <h1 className="text-white">HI</h1>}</div>
      ) : (
        <div className="pt-32 mx-auto  max-w-6xl w-full animate-pulse grid grid-cols-8">
          <div className="col-span-3  w-64 h-96 bg-blue-950"></div>
          <div className="col-span-5 space-y-8">
            <div className="bg-blue-950 w-full h-10"></div>
            <div className="bg-blue-950 w-full h-10"></div>
            <div className="bg-blue-950 w-full h-10"></div>
            <div className="bg-blue-950 w-full h-10"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
