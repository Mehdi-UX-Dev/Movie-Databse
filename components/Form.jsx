import { useRouter } from "next/router";
import {  useState } from "react";

export const Form = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  // handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // push to the search page
    router.push(`/main/search/${value}`);
    // taking the value from the param value
    setValue("");
  };


  // handle the change
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="border-2 border-darkBlue rounded-md justify-self-center pt-2 pb-1 px-2 m-4 ">
          <h3 className="font-extralight">
            Find Your Favourite Movies, Tv shows or people ...
          </h3>
          <input
            type="text"
            className=" border-0 border-b-2 focus:ring-0 focus:border-slate-900  w-11/12"
            placeholder="search ..."
            value={value}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-darkBlue to-lightBlue w-2/4 my-2 rounded-lg italic text-gray-100 hover:text-white hover:font-semibold"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

//  working on the provider the next day inshaullah
