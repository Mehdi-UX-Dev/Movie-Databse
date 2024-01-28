"use client";
import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

import "./style.scss";
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
  const { url } = useAppSelector((state) => state.home);

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
    <div className="mb-[3.25rem]">
      <ContentWrapper>
        {title && (
          <div className="text-[1.5rem] text-white mb-[1.25rem]">{title}</div>
        )}
        <BsFillArrowLeftCircleFill
          className="left-[30px] text-[1.75rem] absolute top-[44%] cursor-pointer translate-y-[-50%] opacity-50 z-10 hover:opacity-80 "
          onClick={() => push("left")}
        />
        <BsFillArrowRightCircleFill
          className="right-[30px] text-[1.75rem] absolute top-[44%] cursor-pointer translate-y-[-50%] opacity-50 z-10 hover:opacity-80"
          onClick={() => push("right")}
        />
        {!loading ? (
          <div className=" flex gap-3 overflow-y-hidden -mr-5 -ml-5 py-5 " ref={carouselContainer}>
            {data?.map((item: any) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className="w-[125px] cursor-pointer"
                  onClick={() =>
                    push(`/${item.media_type || endpoint}/${item.id}`)
                  }
                >
                  <div className="relative w-full aspect-[1/1.5] bg-cover bg-center flex items-end justify-between p-[10px] ">
                    <Image src={posterUrl} alt="" />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="text-white flex flex-col">
                    <span className=" mb-3 leading-5">
                      {item.title || item.name}
                    </span>
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
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
