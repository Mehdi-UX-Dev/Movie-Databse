"use client";

import { useParams } from "next/navigation";
import useFetch from "@/hooks/useFetch";
import DetailsBanner from "@/components/DetailPage/DetailsBanner";
import Cast from "@/components/DetailPage/Cast";
import VideosSection from "@/components/DetailPage/VideosSection";

function Detail() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div className="">
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      {/* <Similar mediaType={mediaType} id={id} /> */}
      {/* <Recommendation mediaType={mediaType} id={id} /> */}
    </div>
  );
}

export default Detail;
