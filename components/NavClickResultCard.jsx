
          // for showing the results of the navbar buttons
          import useFetch from "../utils/useFetch";
          import { Form } from "./Form";
          import Navbar from "../utils/navbar";
          import NavCard from "../utils/CardMaker";
          import WatchProvider from "./WatchProvider";
          import { useState } from "react";

        function NavClickResultCard({category,value,text}) {
          //? adding the state for the page and setPageCount for the api 
              const [page,setPageCount] = useState(1)
          // swr hook 
           const {user} = useFetch('Movie Nav',`https://api.themoviedb.org/3/${category}/${value}?api_key=${process.env.NEXT_PUBLIC_APIV3}&language=en-US&page=${page}` )

            //Todo storing the user  data to the array due to load more function and whenever any new data arrives it must be stored into that particular function 
            

          if(user == undefined) return <div className="text-5xl font-bold text-center grid items-center h-screen">...</div>      
          return (<div>
            {/* navbar section */}
              <Navbar/>

              {/* section  */}
              <div className="grid grid-cols-3 mt-4 ">
            {/* search section and provider section  */}
                <div className="col-span-1 text-center relative">
                  <h1 className=" uppercase text-2xl font-semibold ">{value} {text}</h1>
                  <div className="fixed left-0 w-1/3">
                  {/* component which contains both search and provider data  */}
                    <Form/>
                    <WatchProvider param={text}/>
                    </div>
                  </div>
            {/* cards section showing the results in the card */}
               <div className="flex flex-wrap justify-center col-span-2 space-x-3 space-y-4 pt-12 pr-3">
              {user.results.map(data => (
                <NavCard  key={data.id} {...data}/>
              )
              )}
              </div>
              </div>

              </div>
          )
        }
        
        export default NavClickResultCard;

        // moving it to the utils