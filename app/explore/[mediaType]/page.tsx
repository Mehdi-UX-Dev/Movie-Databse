"use client";

import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";

import useFetch from "@/hooks/useFetch";
import { fetchDataFromApi } from "@/utils/api";
import { useParams } from "next/navigation";
import Spinner from "@/components/Spinner";
import MovieCard from "@/components/MovieCard";

let filters: any = {};

const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

const skItem = () => {
  return (
    <div className="animate-pulse flex flex-col gap-4">
      <div className="w-32 h-32 bg-blue-950"></div>
      <div className="w-24 h-4 bg-blue-950"></div>
      <div className="w-24 h-4 bg-blue-950"></div>
    </div>
  );
};

const Explore = () => {
  const [data, setData] = useState<any>(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);
  const { mediaType } = useParams<{ mediaType: string }>();

  const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

  /**
   *
   * @callback fetches the initial data
   */
  const fetchInitialData = useCallback(() => {
    setLoading(true);
    fetchDataFromApi(`/discover/${mediaType}`, filters).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  }, [mediaType]);

  /**
   *
   * triggers by Infinite Scroll component and fetches the next page
   */
  const fetchNextPageData = () => {
    fetchDataFromApi(`/discover/${mediaType}?page=${pageNum}`, filters).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    filters = {};
    setData(null);
    setPageNum(1);
    setSortby(null);
    setGenre(null);
    fetchInitialData();
  }, [mediaType, fetchInitialData]);

  const onChange = (selectedItems: any, action: any) => {
    if (action.name === "sortby") {
      setSortby(selectedItems);
      if (action.action !== "clear") {
        filters.sort_by = selectedItems.value;
      } else {
        delete filters.sort_by;
      }
    }

    if (action.name === "genres") {
      setGenre(selectedItems);
      if (action.action !== "clear") {
        let genreId = selectedItems.map((g: any) => g.id);
        genreId = JSON.stringify(genreId).slice(1, -1);
        filters.with_genres = genreId;
      } else {
        delete filters.with_genres;
      }
    }
    setPageNum(1);
    fetchInitialData();
  };

  return (
    <div className="pt-40">
      <div className="flex flex-wrap justify-center gap-2 lg:justify-between items-center max-w-7xl mx-auto ">
        <div className="text-white text-[1.5rem]">
          {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
        </div>
        <div className="flex gap-2 ">
          <Select
            isMulti
            name="genres"
            value={genre}
            closeMenuOnSelect={false}
            options={genresData?.genres}
            getOptionLabel={(option: any) => option.name}
            getOptionValue={(option) => option.id}
            onChange={onChange}
            placeholder="Select genres"
            className=""
            classNamePrefix="react-select"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "#173d77",
                color: "white",
                borderRadius: "20px",
                border: "0",
              }),
              placeholder: (baseStyles) => ({
                ...baseStyles,
                color: "white",
              }),
            }}
          />
          <Select
            name="sortby"
            value={sortby}
            options={sortbyData}
            onChange={onChange}
            isClearable={true}
            placeholder="Sort by"
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: "#173d77",
                color: "white",
                borderRadius: "20px",
                border: "0",
              }),
              placeholder: (baseStyles) => ({
                ...baseStyles,
                color: "white",
              }),
            }}
          />
        </div>
      </div>
      {loading && <Spinner />}
      <div className="max-w-7xl mx-auto mt-16">
        {data?.results?.length > 0 ? (
          <InfiniteScroll
            className="flex flex-wrap justify-center gap-4 "
            dataLength={data?.results?.length || []}
            next={fetchNextPageData}
            hasMore={pageNum <= data?.total_pages}
            loader={<Spinner />}
          >
            {data?.results?.map((item: any, index: any) => {
              if (item.media_type === "person") return;
              return (
                <MovieCard key={index} data={item} mediaType={mediaType} />
              );
            })}
          </InfiniteScroll>
        ) : (
          <div className="flex items-center gap-8 flex-wrap">
            {Array.from({ length: 20 }, () => skItem())}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
