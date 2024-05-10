import Image from "next/image";
import React from "react";
import loading from "@/public/Rolling.svg";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center  bg-white ">
      <Image src={loading} alt="loading" />;
    </div>
  );
};

export default Spinner;
