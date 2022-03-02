import Image from "next/image";
import React from "react";
function Cards({posts}) {
    console.log(posts);
  return (
    <div className=" ">
        <h1 className="text-3xl font-bold font-mono mt-3 mb-1">Trending</h1>
          
            {/* cards section here */}
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-center space-y-3 space-x-2  " >
             
              {/* mapping  */}
                        {posts.map(e => {
                          return (
                           <div key={e.id} className="sm:w-72 rounded-lg shadow-lg bg-gray-200   ">
                              <Image src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt='pic' objectFit="cover"  height={150} width={150} layout="responsive" className="rounded-t-md"/>
                            <p className="font-bold pl-3 pb-1 text-xl">{e.name || e.title}</p>
                            {/* release date  */}
                            <strong className="pr-1 pl-2 font-medium">Date:</strong>
                            <span className="text-sm">{e.release_date || e.first_air_date}</span>
                            {/* progress bar */}
                            <p className="font-semibold pl-2">Popularity:</p>

                            {/* onverview */}
                            <p className="truncate  pl-2"><span className="font-semibold pr-1">Overview:</span>{e.overview}</p>
                           </div>
                          )
                        })}
                        </div>
    </div>
  )
}

export default Cards;

// making the process bar 
// implementing the search component
// making the page for it
// making the navbar functional tailwind headless ui or the customize function 

