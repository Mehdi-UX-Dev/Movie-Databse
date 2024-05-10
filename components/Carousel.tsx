"use client";
import React, { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import PosterFallback from "@/public/assets/no-poster.png";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { dynamicBlurDataUrl } from "@/dynamicBlurDataUrl";
import CircleRating from "./CircleRating";
import Genres from "./Genres";

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
  const [imagesSet, setImagesSet] = useState(data);

  useEffect(() => {
    const modifyData = async () => {
      const dataWithBlurHash = await getResources(data);
      setImagesSet(dataWithBlurHash);
    };
    modifyData();
  }, [data]);

  const carouselContainer = useRef<HTMLDivElement>(null!);
  const {
    url: { poster },
  } = useAppSelector((state) => state.home);

  const getResources = async (data: any) => {
    const resources =
      data &&
      (await Promise.all(
        data?.map(async (item: any) => ({
          ...item,
          blurHash: await dynamicBlurDataUrl(poster + item.poster_path),
        }))
      ));

    return resources;
  };

  const skItem = () => {
    return (
      <div className="animate-pulse flex flex-col gap-4">
        <div className="w-32 h-32 bg-blue-950"></div>
        <div className="w-24 h-4 bg-blue-950"></div>
        <div className="w-24 h-4 bg-blue-950"></div>
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
          className="flex flex-col lg:flex-row lg:gap-6 gap-8 px-8 lg:px-0"
          ref={carouselContainer}
        >
          {imagesSet?.slice(0, 4)?.map((item: any) => {
            const posterUrl = poster
              ? poster + item.poster_path
              : PosterFallback;

            return (
              <Link
                className=" cursor-pointer grow"
                href={`/${item.media_type || endpoint}/${item.id}`}
                key={item.id}
              >
                <div className="relative aspect-[1/1.5] ">
                  <Image
                    src={posterUrl}
                    alt=""
                    width={400}
                    height={400}
                    placeholder="blur"
                    blurDataURL={item.blurHash}
                    className="object-cover rounded-2xl w-full h-full"
                  />

                  <CircleRating rating={item.vote_average.toFixed(1)} />
                  <Genres data={item.genre_ids.slice(0, 2)} />
                </div>
                <div className="text-white text-[1.5rem] mt-2 flex flex-col  gap-1">
                  <span className="">{item.title || item.name}</span>
                  <span className="text-gray-400 ">
                    {dayjs(item.release_date || item.first_air_date).format(
                      "MMM D, YYYY"
                    )}
                  </span>
                </div>
              </Link>
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
