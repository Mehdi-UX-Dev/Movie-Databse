
          // for showing the results of the navbar buttons
          import useFetch from "../utils/useFetch";
import { Form } from "./Form";
          import Navbar from "./navbar";
          import NavCard from "./NavCard";

        function NavClickResultCard({category,value,text}) {
              // swr hook 
          const {user} = useFetch('Movie Nav',`https://api.themoviedb.org/3/${category}/${value}?api_key=${process.env.NEXT_PUBLIC_APIV3}&language=en-US&page=1` )
         
           if(user == undefined) return <div className="text-5xl font-bold text-center grid items-center h-screen">...</div>      
          return (<div>
            {/* navbar section */}
              <Navbar/>

              {/* section  */}
              <div className="grid grid-cols-3 mt-4">
            {/* search section and provider section  */}
                <div className="col-span-1 text-center">
                  <h1 className=" uppercase text-2xl font-semibold ">{value} {text}</h1>
                  {/* component which contains both search and provider data  */}
                    <Form/>
                  </div>
            {/* cards section showing the results in the card */}
               <div className="flex flex-wrap justify-center col-span-2 space-x-3 space-y-4 pt-12">
              {user.results.map(data => (
                <NavCard key={data.id} {...data}/>
              )
              )}
              </div>
              </div>

              </div>
          )
        }
        
        export default NavClickResultCard;

        // moving it to the utils