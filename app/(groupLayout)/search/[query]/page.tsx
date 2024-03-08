"use client";
import { useAppSelector } from "@/redux/hooks";
import { fetchDataFromApi } from "@/utils/api";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import fallBack from "@/public/assets/no-poster.png";
import Link from "next/link";

function Page() {
  const { query } = useParams();
  const [data, setData] = useState<any>(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { url } = useAppSelector((state) => state.home);

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
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
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <div className="pt-20 max-w-6xl mx-auto">
      {!loading ? (
        <section>
          <h1 className="text-white text-[1.5rem] ">
            Search Results for &apos;{query}&apos;
          </h1>
          <div className="flex gap-4 flex-wrap ">
            {data &&
              url?.poster &&
              data?.results.map((item: any, idx: number) => {
                let imgUrl = item.poster_path
                  ? url.poster + item.poster_path
                  : fallBack;
                console.log(item);

                return (
                  <div key={idx} className="">
                    <Link href={`/${item.media_type}/${item.id}`}>
                      <Image
                        src={imgUrl}
                        alt="search"
                        width={150}
                        height={150}
                        className="object-cover rounded"
                      />

                      <p className="font-bold text-lg text-white max-w-[15ch]">
                        {item.name || item.original_title}
                      </p>
                      <p className="text-gray-500">
                        {item.first_air_date || item.release_date}
                      </p>
                    </Link>
                  </div>
                );
              })}
          </div>
        </section>
      ) : (
        <div className="animate-pulse flex flex-col gap-4  ">
          <div className="w-32 h-32 bg-blue-950 "></div>
          <div className="w-24 h-4 bg-blue-950 "></div>
          <div className="w-24 h-4 bg-blue-950  "></div>
        </div>
      )}
    </div>
  );
}

export default Page;
