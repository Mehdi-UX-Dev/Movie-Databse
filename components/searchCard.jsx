import { useEffect, useState } from "react"
import MyRadioGroup from "./MyRadioGroup"
import Navbar from "../utils/navbar"
import NavCard from "../utils/CardMaker"
import useSWR from "swr"

    
    function SearchCard({hidingTheValue,text,value}) {
                // swrHook returning the value 
    const {data,error} = useSWR(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_APIV3}&language=en-US&query=${value}&page=1&include_adult=false`
    ); 
     

            // storage for the data for mapping and filtering 
            const [storage, setStorage] = useState([])
          
            // useEffect Hook 
            useEffect(() => {
              // this implementation is not the most logical way of making the system work 
              if(data !== undefined && storage.length == 0) setStorage(data.results)
            },[storage,data])
          // the storage must be updated according to the radio button 
          const updateStorage = selection => {
         const filteredData = data.results.filter(select => {
               switch(selection){
                 case 'tv': return select.media_type === selection;
                 case 'movie' : return select.media_type === selection;
                 case 'multi' : return select;
                 default : return select;
               }
              })
                // setting up the new data 
                setStorage(filteredData)
            }

    if(data == undefined) return <div className="text-5xl font-bold text-center grid items-center h-screen">...</div>   
      return (
      <div>
          {/* navbar component */}
          <Navbar/>
          {/* page  */}
        <div className="grid grid-cols-3 mt-10  ">
            {/* radio buttons and header section */}
            <div className="relative ">
            <div className="col-span-1 fixed left-0 top-10 w-1/3 md:w-3/12 mt-5">
            {/* header element */}
           <h1 className="text-xl font-bold font-mono mt-3 mb-1 ml-3">{text}<span hidden={hidingTheValue} className="uppercase font-mono font-semibold `">{`'${value}'`}</span></h1>
            {/* buttons for filtering  */}
            <MyRadioGroup filter={updateStorage}/>
            </div>
            </div>

            {/* cards section here */}
            <div className="col-span-2 w-11/12 pl-4 space-y-4 justify-self-center md:flex md:flex-wrap md:space-x-2 " >
              {/* mapping  */}
              { storage.map(data => (
                     <NavCard  key={data.id} {...data}/>
              )
                )}
                        
                      </div>
             </div>
    </div>
      )
    }
    
    export default SearchCard