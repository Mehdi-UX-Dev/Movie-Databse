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
    <div className="overflow-autob grid justify-center z-50   ">
      <div className="text-white text-[1.5rem]">Top Cast</div>
      {!loading ? (
        <div className="flex items-center flex-wrap gap-10">
          {data?.slice(0, 6).map((item: any) => {
            let imgUrl =
              item.profile_path && url.profile
                ? url.profile + item.profile_path
                : avatar;
            return (
              <div key={item.id} className="">
                <div className="aspect-auto  grow flex flex-col gap-4 items-center justify-center">
                  <Image
                    className="rounded-full  w-40 h-40 object-cover "
                    src={imgUrl}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <p className="text-white text-center font-bold pt-2 pb-1 ">
                  {item.name}
                </p>
                <p className="text-gray-500 text-center">{item.character}</p>
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
