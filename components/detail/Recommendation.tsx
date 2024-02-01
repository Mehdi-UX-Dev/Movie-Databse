import React from "react";

import Carousel from "@/components/UI_components/carousel/Carousel";
import useFetch from "@/hooks/useFetch";

const Recommendation = ({ mediaType, id } : {mediaType : any , id: any}) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;
