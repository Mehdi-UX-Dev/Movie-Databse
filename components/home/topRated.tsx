"use client"
import React, { useState } from "react";

import Carousel from "../UI_components/carousel/Carousel";
import ContentWrapper from "../UI_components/contentWrapper/ContentWrapper";
import SwitchTabs from "../UI_components/switchTabs/SwitchTabs";

import useFetch from "../../hooks/useFetch";

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab : string) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection relative mb-[70px]">
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwitchTabs
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                />
            </ContentWrapper>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
};

export default TopRated;
