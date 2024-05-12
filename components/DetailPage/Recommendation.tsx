import React from "react";

import useFetch from "@/hooks/useFetch";
import Carousel from "../Carousel";

const Recommendation = ({ mediaType, id }: { mediaType: any; id: any }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    <div className="max-w-6xl mx-auto">
      <Carousel
        title="Recommendations"
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
    </div>
  );
};

export default Recommendation;
