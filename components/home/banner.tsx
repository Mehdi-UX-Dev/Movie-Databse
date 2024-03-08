"use client";
import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const { push } = useRouter();

  const { url } = useAppSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop &&
      url?.backdrop +
        data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    bg && setBackground(bg);
  }, [data, url.backdrop]);

  const searchQueryHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter" && query.length > 0) {
      push(`/search/${query}`);
    }
  };

  return (
    <div className="bg-black h-[100vh] flex items-center  relative w-full">
      {!loading && (
        <div className="w-full h-full absolute top-0 left-0 overflow-hidden opacity-50 ">
          <Image
            src={background}
            alt=""
            fill
            className="w-full h-full object-cover object-center "
          />
        </div>
      )}

      <div className="w-full h-full bg-gradient-to-b absolute bottom-0 left-0 from-[rgba(4,21,45,0)0%] to-[#04152d_100%]"></div>

      <div className="flex flex-col text-white text-center max-w-[880px] relative mx-auto  ">
        <span className="text-7xl font-bold ">Welcome.</span>
        <span className="text-2xl mb-4">
          Millions of movies, TV shows and people to discover. Explore now.
        </span>
        <div className="flex items-center w-full justify-center">
          <input
            type="text"
            placeholder="Search for a movie or tv show...."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            className="w-[calc(100%-150px)] h-14 text-xl py-7 bg-white outline-0 border-0 rounded-l-3xl text-black pl-4  "
          />
          <button className="text-lg w-[150px] h-14 bg-gradient-to-r from-[#f89e00] to-[#da2f68] text-white border-0 outline-0 rounded-r-3xl">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
