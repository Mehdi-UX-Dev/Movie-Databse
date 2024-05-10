import React, { useEffect } from "react";
import dayjs from "dayjs";

import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../../public/assets/no-poster.png";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { fetchApiConfig } from "@/redux/homeSlice";

const MovieCard = ({
  data,
  fromSearch,
  mediaType,
}: {
  data?: any;
  fromSearch?: any;
  mediaType?: any;
}) => {
  const { url } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchApiConfig());
  }, [dispatch]);

  const { push } = useRouter();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;

  return (
    url.poster && (
      <div
        className="cursor-pointer grow space-y-4"
        onClick={() => push(`/${data.media_type || mediaType}/${data.id}`)}
      >
        <div className="relative aspect-[1/1.5]">
          <Image
            src={posterUrl}
            className="object-cover rounded-2xl"
            alt=""
            width={200}
            height={250}
            placeholder="blur"
            blurDataURL={`${posterUrl}`}
            loading="lazy"
          />
          {!fromSearch && (
            <React.Fragment>
              <CircleRating rating={data.vote_average.toFixed(1)} />
              <Genres data={data.genre_ids.slice(0, 2)} />
            </React.Fragment>
          )}
        </div>
        <div className="text-white flex flex-col space-y-1 ">
          <span className="max-w-[20ch] font-bold text-[18px]">
            {data.title || data.name}
          </span>
          <span className="text-gray-500 text-[14px]">
            {dayjs(data.release_date).format("MMM D, YYYY")}
          </span>
        </div>
      </div>
    )
  );
};

export default MovieCard;
