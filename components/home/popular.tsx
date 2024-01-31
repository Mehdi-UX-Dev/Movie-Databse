"use client";
import React, { useState } from "react";
import Carousel from "../UI_components/carousel/Carousel";
import SwitchTabs from "../UI_components/switchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab: string) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="max-w-6xl mx-auto mb-8 ">
      <div className="flex justify-between items-center mb-4">
        <span className="text-white text-[1.5rem] ">What&apos;s Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </div>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;
