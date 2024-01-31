import React from "react";

import { useAppSelector } from "@/redux/hooks";

const Genres = ({ data }: any) => {
  const { genres } = useAppSelector((state) => state.home);

  return (
    <div className="flex flex-wrap max-w-[120px] justify-end items-center gap-1 absolute right-0 bottom-5 mr-4 ">
      {data?.map((g: any) => {
        if (!genres[g]?.name) return;
        return (
          <div
            key={g}
            className="bg-blue-500 px-1 py-1 text-[12px] rounded-md text-white whitespace-nowrap"
          >
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
