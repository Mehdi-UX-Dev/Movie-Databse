import React from "react";

import useFetch from "@/hooks/useFetch";
import Carousel from "../Carousel";

const Similar = ({ mediaType, id }: { mediaType: any; id: any }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <div className="max-w-6xl mx-auto">
      <Carousel
        title={title}
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
    </div>
  );
};

export default Similar;
