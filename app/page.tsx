"use client";

import HeroBanner from "@/components/home/banner";
import Popular from "@/components/home/popular";
import TopRated from "@/components/home/topRated";
import Trending from "@/components/home/trending";
import { getApiConfiguration, getGenres } from "@/redux/homeSlice";
import { useAppDispatch } from "@/redux/hooks";
import { fetchDataFromApi } from "@/utils/api";
import React, { useEffect } from "react";

function Page() {
  const dispatch = useAppDispatch();
  // const { url } = useAppSelector((state) => state.home);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  console.log("in the data");

  const genresCall = async () => {
    let promises: any = [];
    let endPoints = ["tv", "movie"];
    let allGenres: any = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item: any) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

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
