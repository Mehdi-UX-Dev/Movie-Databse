"use client"

import React from "react";

import avatar from "@/public/assets/avatar.png";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";

const Cast = ({ data, loading }: { data: any; loading: any }) => {
  const { url } = useAppSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <div className="sectionHeading">Top Cast</div>
      {!loading ? (
        <div className="listItems">
          {data?.map((item: any) => {
            let imgUrl = item.profile_path
              ? url.profile + item.profile_path
              : avatar;
            return (
              <div key={item.id} className="listItem">
                <div className="profileImg">
                  {/* <Image src={imgUrl} alt="" width={200} height={200} /> */}
                </div>
                <div className="name">{item.name}</div>
                <div className="character">{item.character}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="castSkeleton">
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
        </div>
      )}
    </div>
  );
};

export default Cast;
