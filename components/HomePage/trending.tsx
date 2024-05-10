"use client";
import React, { useState } from "react";

import useFetch from "@/hooks/useFetch";
import SwitchTabs from "../SwitchTabs";
import Carousel from "../Carousel";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab: string) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className=" max-w-7xl mx-auto mb-16 ">
      <div className="flex justify-between items-center mb-8 px-8 lg:px-0">
        <span className="text-[1.5rem]   text-white">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
