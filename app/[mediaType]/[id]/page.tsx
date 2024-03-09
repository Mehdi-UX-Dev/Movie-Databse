"use client";

import DetailsBanner from "@/components/detail/DetailsBanner";
import Cast from "@/components/detail/Cast";
import VideosSection from "@/components/detail/VideosSection";
import Similar from "@/components/detail/Similar";
import Recommendation from "@/components/detail/Recommendation";
import { useParams } from "next/navigation";
import useFetch from "@/hooks/useFetch";

function Detail() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      {/* <Cast data={credits?.cast} loading={creditsLoading} /> */}
      {/* <VideosSection data={data} loading={loading} /> */}
      {/* <Similar mediaType={mediaType} id={id} /> */}
      {/* <Recommendation mediaType={mediaType} id={id} /> */}
    </div>
  );
}

export default Detail;
