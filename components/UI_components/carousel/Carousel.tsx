"use client";
import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import PosterFallback from "../../../public/assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const navigation = (dir: string) => {
    const container = carouselContainer.current;

    const scrollAmount =
      container &&
      (dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20));

    container &&
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
  };

  const skItem = () => {
    return (
      <div className="w-[125px] shrink-0 ">
        <div className="rounded-xl w-full mb-[30px] aspect-[1/1.5] skeleton"></div>
        <div className="flex flex-col ">
          <div className="w-full h-5 mb-3  "></div>
          <div className="opacity-50 text-[14px] "></div>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      {title && (
        <div className="text-[1.5rem] text-white mb-[1.25rem]">{title}</div>
      )}
      <BsFillArrowLeftCircleFill
        className="left-[30px] text-[1.75rem] absolute top-[44%] cursor-pointer translate-y-[-50%] opacity-50 z-10 hover:opacity-80 "
        onClick={() => navigation("left")}
      />
      <BsFillArrowRightCircleFill
        className="right-[30px] text-[1.75rem] absolute top-[44%] cursor-pointer translate-y-[-50%] opacity-50 z-10 hover:opacity-80"
        onClick={() => navigation("right")}
      />
      {!loading ? (
        <div className="flex gap-3" ref={carouselContainer}>
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
                    width={450}
                    height={350}
                    placeholder="blur"
                    blurDataURL={`${posterUrl}`}
                    className="object-cover rounded-2xl"
                  />

                  <CircleRating rating={item.vote_average.toFixed(1)} />
                  <Genres data={item.genre_ids.slice(0, 2)} />
                </div>
                <div className="text-white flex flex-col mt-10 space-y-1 mb-4">
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
        <div className="flex gap-2 overflow-y-hidden -mr-5 -ml-5 py-5 ">
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
