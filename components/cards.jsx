import Image from "next/image";
import React from "react";
import spinner from '../public/spinner.svg'
import CardMaker from "../utils/CardMaker";


function Cards({posts,text,hidingTheValue,value,}) {
   
    if( posts === undefined) return( <div className="flex justify-center items-center h-screen"><Image src={spinner} className="" alt="spinner"/></div>)
    return (
    <div className="md:px-4">
        <h1 className="text-3xl font-bold font-mono mt-3 mb-1 ml-3">{text}<span hidden={hidingTheValue} className="uppercase`">{`'${value}'`}</span></h1>
            {/* cards section here */}
            <div className="grid grid-flow-col overflow-x-auto sm:flex sm:flex-wrap  space-y-3 space-x-2 mx-2" >
              {/* mapping  */}
              {posts.results.map(data =>  (
                <CardMaker  key={data.id} {...data}/>
              )
              )}
                        
           </div>
    </div>
  )  
}

export default Cards;



