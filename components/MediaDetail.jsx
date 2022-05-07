import Image from "next/image";
import useSWR from "swr";
import Navbar from "../utils/navbar";
import vercel from "../public/vercel.svg";
import { useSession } from "next-auth/react";
import MyModal from "../utils/MyModal";

const MediaDetail = ({ id, media }) => {
  const { status } = useSession();

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/${media}/${id}?api_key=${process.env.NEXT_PUBLIC_APIV3}&language=en-US`
  );

  if ((error && data == undefined) || status == "unauthenticated")
    return (
      <MyModal error={error ? error.toString() : undefined} status={status} />
    );
  if (data == undefined)
    return (
      <div className="flex justify-center items-center h-screen text-3xl font-bold">
        Loading...
      </div>
    );
  return (
    <div>
      <Navbar />
      {/* grid 1 and 2 span  */}
      <div className="grid grid-cols-3 bg-gray-300 mt-10 mb-5   ">
        {/* //? image*/}
        <div className="p-5 col-span-1">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            height={300}
            width={200}
            layout="responsive"
            className="rounded-md overflow-hidden "
            alt="MediaDetail"
            placeholder="blur"
            blurDataURL={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          />
        </div>

        {/*  //*  info */}
        {/* //** header  */}
        <div className="col-span-2 py-5">
          <h1 className="capittalize font-bold text-3xl">
            {data.original_name || data.original_title}{" "}
            <span className="font-semibold text-gray-600">
              (
              {media == "movie"
                ? data.release_date.slice(0, 4)
                : data.first_air_date}
              )
            </span>
          </h1>

          {/* genre */}
          <div className=" ">
            <h4 className="uppercase font-medium">
              {media == "tv " ? "Tv Show" : "Movie"}
              <span className="font-extrabold text-3xl px-2 align-text-bottom">
                .
              </span>
              <span className="inline-block ">
                {data.genres.map((ent) => (
                  <span className="text-gray-500" key={ent.id}>
                    {ent.name},{" "}
                  </span>
                ))}

                <span className="font-extrabold text-3xl px-2 align-text-bottom">
                  .
                </span>
                <span className="inline-block">
                  {data.runtime || data.episode_run_time} min
                </span>
              </span>
            </h4>
          </div>

          {/* //* user rating  */}
          <div className="flex items-center space-x-3">
            <div className=" inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5 bg-darkBlue mt-2  ">
              <svg className="w-20 h-20">
                <circle
                  className="text-gray-300"
                  strokeWidth="5"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                />
                <circle
                  className="text-lightBlue"
                  strokeWidth="6"
                  strokeDasharray="100"
                  strokeDashoffset={data.vote_average * 10}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                />
              </svg>
              <span className="absolute text-xl text-lightBlue" x-text="`100`">
                {data.vote_average}
              </span>
            </div>
            <span className="font-semibold">
              User <span className="block ">Score</span>
            </span>

            {/* //? companies in production */}
            <div className="px-5 space-y-2">
              <span className="font-bold text-xl"> Production Companies: </span>
              {data.production_companies.map((com) => (
                <div key={com.id}>
                  <Image
                    src={
                      com.logo_path !== null && com.logo_path !== undefined
                        ? `https://image.tmdb.org/t/p/w500/${com.logo_path}`
                        : vercel
                    }
                    alt="company"
                    height={40}
                    width={40}
                    className="bg-gray-300 rounded"
                  />
                  <span className="pl-2 font-semibold">{com.name}</span>
                </div>
              ))}
            </div>
            {/* status  */}
            <span className="text-md font-medium px-4">
              Status:{" "}
              <span className="font-bold font-serif hidden md:inline-block">{data.status}</span>
              {/* production countries */}
              <div className="pt-4 space-y-2 hidden md:block">
                <h3 className="font-semibold">
                  {data.production_countries.length == 1
                    ? "Production Country: "
                    : "Production Countries: "}
                </h3>
                {data.production_countries.map((count) => (
                  <div key={count.name} className="flex ">
                    <Image
                      layout="fixed"
                      alt="country"
                      height={40}
                      width={40}
                      className="bg-gray-300 rounded "
                      src={`https://countryflagsapi.com/svg/${count.iso_3166_1}`}
                    />
                    <span className="px-2 font-bold ">{count.name}</span>
                  </div>
                ))}
              </div>
            </span>
          </div>

          {/* //*overview */}
          <div className="py-4 pr-2">
            <h2 className="font-medium italic text-lg">{data.tagline}</h2>
            <p>{data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetail;
