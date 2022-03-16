import Image from "next/image"
import vercel from '../public/vercel.svg'
import { useEffect, useState } from "react"
import MyRadioGroup from "./MyRadioGroup"
  
    
    function SearchCard({posts,hidingTheValue,text,value}) {
            // storage for the data for mapping and filtering 
            const [storage, setStorage] = useState([])
            // useEffect Hook 
            useEffect(() => {
              // implementing the logic cuz the posts come to teh searchCard empty in the first call 
              // this implementation is not the most logical way of making the system work 
              if(storage.length == 0) setStorage(posts)
            },[storage,posts])
          // the storage must be updated according to the radio button 
          const updateStorage = selection => {
         const filteredData = posts.filter(select => {
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

        
      return (
          
        <div className="grid grid-cols-3 mt-3 ">
          
            {/* radio buttons and header section */}
            <div className="relative ">
            <div className="col-span-1 fixed left-0 top-10 w-1/3 md:w-3/12 ">
            {/* header element */}
           <h1 className="text-xl font-bold font-mono mt-3 mb-1 ml-3">{text}<span hidden={hidingTheValue} className="uppercase font-mono font-semibold `">{`'${value}'`}</span></h1>
            {/* buttons for filtering  */}
            <MyRadioGroup filter={updateStorage}/>
            </div>
            </div>

            {/* cards section here */}
            <div className="col-span-2 w-11/12 pl-4 space-y-4 justify-self-center md:flex md:flex-wrap md:space-x-2 " >
              {/* mapping  */}
              { storage.map(e => {
                // checking for the error handling in the images // if image not fetched then vercel svg will be shown 
                let pic = e.poster_path !== undefined && e.poster_path !== null ? `https://image.tmdb.org/t/p/w500/${e.poster_path}` : vercel
                          return (
                           <div key={e.id} className="sm:w-72  md:hover:scale-105  overflow-hidden rounded-lg shadow-lg bg-gray-200 ">
                              <Image   src={pic} alt='pic' objectFit="cover"  height={150} width={150} layout="responsive" className="rounded-t-md" placeholder="blur" blurDataURL={pic}/>
                            <p className="font-bold pl-3 pb-1 text-xl">{e.name || e.title}</p>
                            {/* release date  */}
                            <strong className="pr-1 pl-2 font-medium">Date:</strong>
                            <span className="text-sm">{e.release_date || e.first_air_date}</span>
                            {/* progress bar */}
                            <p className="font-semibold pl-2 ">Popularity:<span className="font-bold pl-1">{e.vote_average}</span></p>
                            
                            {/* onverview */}
                            <p className="truncate  pl-2"><span className="font-semibold pr-1">Overview:</span>{e.overview}</p>
                           </div>
                          )
                        })}
                        
                        </div>
    </div>
      )
    }
    
    export default SearchCard