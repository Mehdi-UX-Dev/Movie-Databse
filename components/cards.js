import Image from "next/image";
import React from "react";
function Cards({posts}) {
    console.log(posts);
  return (
    <div className="mt-2 ml-2 ">
        <h1 className="text-3xl font-bold font-mono">Trending</h1>
     
            {/* cards section here */}
            <div className="">
                        {posts.results.map(e => {
                          return (
                           <div key={e.id} className="rounded-lg shadow-sm ">
                              <Image src={e.poster_path} alt='pic' height={150} width={140}/>
                           </div>
                          )
                        })}
                        </div>
    </div>
  )
}

export default Cards