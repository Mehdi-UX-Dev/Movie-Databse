"use client";

import HeroBanner from "@/components/HomePage/banner";
import Popular from "@/components/HomePage/popular";
import TopRated from "@/components/HomePage/topRated";
import Trending from "@/components/HomePage/trending";

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
