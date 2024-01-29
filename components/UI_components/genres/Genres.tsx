import React from "react";

import { useAppSelector } from "@/redux/hooks";

const Genres = ({ data }: any) => {
  const { genres } = useAppSelector((state) => state.home);

  return (
    <div className="flex gap-1">
      {data?.map((g: any) => {
        if (!genres[g]?.name) return;
        return (
          <div
            key={g}
            className="bg-pink-500 px-1 py-2 text-[12px] rounded-md text-white whitespace-nowrap"
          >
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
