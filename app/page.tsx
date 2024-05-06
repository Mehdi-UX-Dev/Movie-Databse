"use client";

import HeroBanner from "@/components/home/banner";
import Popular from "@/components/home/popular";
import TopRated from "@/components/home/topRated";
import Trending from "@/components/home/trending";

import { fetchApiConfig, genresCall } from "@/redux/homeSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useEffect } from "react";

function Page() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchApiConfig());
    dispatch(genresCall());
  }, [dispatch]);
  return (
    <main>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </main>
  );
}

export default Page;
