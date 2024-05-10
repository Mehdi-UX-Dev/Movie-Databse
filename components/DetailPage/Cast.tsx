"use client";

import React from "react";

import avatar from "@/public/assets/avatar.png";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";

const Cast = ({ data, loading }: { data: any; loading: any }) => {
  const { url } = useAppSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="animate-pulse flex flex-col gap-4  ">
        <div className="w-32 h-32 bg-blue-950 "></div>
        <div className="w-24 h-4 bg-blue-950 "></div>
        <div className="w-24 h-4 bg-blue-950  "></div>
      </div>
    );
  };
  return (
    <div className=" max-w-6xl mx-auto  overflow-x-auto">
      <div className="text-white text-[1.5rem]">Top Cast</div>
      {!loading ? (
        <div className="flex items-center gap-10">
          {data?.slice(0, 7).map((item: any) => {
            let imgUrl =
              item.profile_path && url.profile
                ? url.profile + item.profile_path
                : avatar;
            return (
              <div key={item.id} className="mb-5">
                <div className="aspect-auto mt-3 mb-1">
                  <Image
                    className="rounded object-cover"
                    src={imgUrl}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text-white font-bold max-w-[10ch] truncate">
                  {item.name}
                </div>
                <div className="text-gray-500 truncate max-w-[10ch]">
                  {item.character}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex gap-2">
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
        </div>
      )}
    </div>
  );
};

export default Cast;
