"use client";
import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import dayjs from "dayjs";

import PosterFallback from "@/public/assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Carousel = ({
  data,
  loading,
  endpoint,
  title,
}: {
  data?: any;
  loading?: string | boolean | null;
  endpoint?: string;
  title?: string;
}) => {
  const carouselContainer = useRef<HTMLDivElement>(null!);

  const {
    url: { poster },
  } = useAppSelector((state) => state.home);

  const { push } = useRouter();
  const path = usePathname();
  const skItem = () => {
    return (
      <div className="animate-pulse flex flex-col gap-4  ">
        <div className="w-32 h-32 bg-blue-950 "></div>
        <div className="w-24 h-4 bg-blue-950 "></div>
        <div className="w-24 h-4 bg-blue-950  "></div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {title && (
        <div className="text-[1.5rem] text-white mb-[1.25rem] ">{title}</div>
      )}

      {!loading ? (
        <div
          className="flex flex-col lg:flex-row lg:gap-3 gap-8 px-8 lg:px-0"
          ref={carouselContainer}
        >
          {data?.slice(0, 4)?.map((item: any) => {
            const posterUrl = poster
              ? poster + item.poster_path
              : PosterFallback;

            return (
              <div
                key={item.id}
                className=" cursor-pointer grow"
                onClick={() =>
                  push(`/${item.media_type || endpoint}/${item.id}`)
                }
              >
                <div className="relative aspect-[1/1.5] ">
                  <Image
                    src={posterUrl}
                    alt=""
                    width={path === "/Home" ? 450 : 250}
                    height={path === "/Home" ? 450 : 250}
                    placeholder="blur"
                    blurDataURL={`${posterUrl}`}
                    className="object-cover rounded-2xl w-full h-full"
                  />

                  <CircleRating rating={item.vote_average.toFixed(1)} />
                  <Genres data={item.genre_ids.slice(0, 2)} />
                </div>
                <div className="text-white flex flex-col mt-1 space-y-1">
                  <span className="  leading-5">{item.title || item.name}</span>
                  <span className="text-[14px] opacity-50">
                    {dayjs(item.release_date || item.first_air_date).format(
                      "MMM D, YYYY"
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex gap-8  py-5 ">
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
        </div>
      )}
    </div>
  );
};

export default Carousel;
