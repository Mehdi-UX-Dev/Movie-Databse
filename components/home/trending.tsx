"use client";
import React, { useState } from "react";
import Carousel from "../UI_components/carousel/Carousel";
import ContentWrapper from "../UI_components/contentWrapper/ContentWrapper";
import SwitchTabs from "../UI_components/switchTabs/SwitchTabs";

import useFetch from "../../hooks/useFetch";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab: string) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className=" max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[1.5rem]  mb-[20px] text-white">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
