"use client";
import React, { useState } from "react";
import Carousel from "../Carousel";
import useFetch from "../../hooks/useFetch";
import SwitchTabs from "../SwitchTabs";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab: string) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="max-w-7xl mx-auto my-16 ">
      <div className="flex justify-between items-center mb-8 px-8 lg:px-0">
        <span className="text-white text-[1.5rem] ">What&apos;s Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </div>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;
