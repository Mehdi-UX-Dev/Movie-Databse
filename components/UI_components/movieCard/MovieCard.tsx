import React from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import Image from "next/image";

const MovieCard = ({ data, fromSearch, mediaType } : {data?: any , fromSearch?: any, mediaType?: any}) => {
    const { url } = useAppSelector((state) => state.home);
    const {push} = useRouter()
    const posterUrl = data.poster_path
        ? url.poster + data.poster_path
        : PosterFallback;
    return (
        <div
            className="movieCard"
            onClick={() =>
                push(`/${data.media_type || mediaType}/${data.id}`)
            }
        >
            <div className="posterBlock">
                <Image src={posterUrl} className="" alt=""/>
                {!fromSearch && (
                    <React.Fragment>
                        <CircleRating rating={data.vote_average.toFixed(1)} />
                        <Genres data={data.genre_ids.slice(0, 2)} />
                    </React.Fragment>
                )}
            </div>
            <div className="textBlock">
                <span className="title">{data.title || data.name}</span>
                <span className="date">
                    {dayjs(data.release_date).format("MMM D, YYYY")}
                </span>
            </div>
        </div>
    );
};

export default MovieCard;
