import Image from "next/image";
import React from "react";
import spinner from '../public/spinner.svg'
import NavCard from "../utils/CardMaker";

function Cards({posts,text,hidingTheValue,value,}) {
    if( posts === undefined) return( <div className="flex justify-center items-center h-screen"><Image src={spinner} className="" alt="spinner"/></div>)
    return (
    <div>
        <h1 className="text-3xl font-bold font-mono mt-3 mb-1 ml-3">{text}<span hidden={hidingTheValue} className="uppercase`">{`'${value}'`}</span></h1>
            {/* cards section here */}
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-center space-y-3 space-x-2 mx-2 " >
              {/* mapping  */}
              {posts.results.map(data =>  (
                <NavCard  key={data.id} {...data}/>
              )
              )}
                        
           </div>
    </div>
  )  

}

export default Cards;



