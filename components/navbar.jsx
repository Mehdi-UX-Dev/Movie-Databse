import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Tmdb from '../public/Tmdb_short.svg'
import LinkMaker from '../utils/LinkMaker'

function Navbar() {
    
      // making the state for the hovering 
      const [movieVisible,setMovieVisible] = useState(true);
      const [tvVisible , setTvVisible] = useState(true)
        // handling hover
      const handleHover = type => {
        if(type == 'movie') setMovieVisible(!movieVisible)
        if(type == 'tvshow') setTvVisible(!tvVisible)
       
      }
      
      
  return (
    <div className="flex bg-darkBlue p-2 w-full ">
            {/* logo section */}
        <div className='mx-8 '>
        <Image alt="tmdb" src={Tmdb} className=""  width={130}/>
        </div>
        
          {/* dropdown menu */}
          {/* movie's section */}
       <div className='realtive mt-2 mr-3' onMouseOver={() => handleHover('movie')} onMouseOut={() => handleHover('movie')}>
            {/* button */}
        <div className=''>
            <button className='text-white font-bold'>Movies</button>
        </div>
          {/* links  */}
          <div className="absolute  w-1/6 bg-gray-100 rounded divide-y-2 divide-slate-300" hidden={movieVisible} >
          <LinkMaker name={'Popular'} url={'/'}/>
          <LinkMaker name={'Trending'} url={'/'}/>
          <LinkMaker name={'Upcoming'} url={'/main'}/>
          </div>
        </div>

          {/* tv's section */}
          <div className='realtive mt-2 ml-5 divide-y-2' onMouseOver={() => handleHover('tvshow')} onMouseOut={() => handleHover('tvshow')}>
            {/* button */}
        <div>
            <button className='text-white font-bold'>Tv Shows</button>
        </div>
          {/* links  */}
          <div className="absolute bg-gray-200 divide-y-2 divide-slate-300 w-1/6 rounded" hidden={tvVisible}   >
          <LinkMaker name={'Popular'} url={'/'}/>
          <LinkMaker name={'trending'} url={'/'}/>
          <LinkMaker name={'upcoming'} url={'/main'}/>
          </div>
        </div>
    </div>
  )
}

export default Navbar


