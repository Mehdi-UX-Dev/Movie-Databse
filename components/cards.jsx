import Image from "next/image";
import React, { useState } from "react";
import vercel from '../public/vercel.svg'
import spinner from '../public/spinner.svg'

function Cards({posts,text,hidingTheValue,value,}) {
    if( posts === undefined) return( <div className="flex justify-center items-center h-screen"><Image src={spinner} className="" alt="spinner"/></div>)
    return (
    <div>
      
        <h1 className="text-3xl font-bold font-mono mt-3 mb-1 ml-3">{text}<span hidden={hidingTheValue} className="uppercase `">{`'${value}'`}</span></h1>
          <p></p>
            {/* cards section here */}
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-center space-y-3 space-x-2 mx-2 " >
              {/* mapping  */}
              { posts.results.map(e => {
                // checking for the error handling in the images // if image not fetched then vercel svg will be shown 
                let pic = e.poster_path !== undefined && e.poster_path !== null ? `https://image.tmdb.org/t/p/w500/${e.poster_path}` : vercel
                          return (
                           <div key={e.id} className="sm:w-72  md:hover:scale-105  overflow-hidden rounded-lg shadow-lg bg-gray-200 ">
                              <Image  alt='pic' objectFit="cover"  height={150} width={150} layout="responsive" className="rounded-t-md" blurDataURL={pic} src={pic} placeholder="blur"/>
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

export default Cards;


// making the navbar functional tailwind headless ui or the customize function 
// making the authentication clear from email instead adding google provider 
// making the progress and toggle button for the trending part 
