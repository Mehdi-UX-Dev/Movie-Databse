import Image from 'next/image'
import { useState } from 'react'
import Tmdb from '../public/Tmdb_short.svg'
import LinkMaker from './LinkMaker'

function Navbar() {
    
      // making the state for the hovering 
      const [visiblity,setVisiblity] = useState({movieVisible: true , tvVisible: true});
      // const [tvVisible , setTvVisible] = useState(true)
        // handling hover
      const handleHover = type => {
        if(type == 'movie') setVisiblity({...visiblity, movieVisible: !visiblity.movieVisible})
        if(type == 'tvshow') setVisiblity({...visiblity, tvVisible: !visiblity.tvVisible})
       
      }
      
      
  return (
    <div className="flex bg-darkBlue p-2 w-full ">
            {/* logo section */}
        <div className='mx-8'>
        <Image alt="tmdb" src={Tmdb} width={130}/>
        </div>
        
          {/* dropdown menu */}
          {/* movie's section */}
       <div className='realtive mt-2 mr-3 z-10' onMouseOver={() => handleHover('movie')} onMouseOut={() => handleHover('movie')}>
            {/* button */}
        <div className=' '>
            <button className='text-white font-bold'>Tv Shows</button>
        </div>
          {/* links  */}
          <div className="absolute  w-1/6 bg-gray-100 rounded divide-y-2 divide-slate-300" hidden={visiblity.movieVisible} >
          <LinkMaker name={'Popular'} url={'/main/tv/popular'}  />
          <LinkMaker name={'Airing Today'} url={'/main/tv/airing_today'} />
          <LinkMaker name={'Top Rated'} url={'/main/tv/top_rated'} />
          </div>
        </div>
              
          {/* tv's section */}
          <div className='realtive mt-2 ml-5 divide-y-2 z-10' onMouseOver={() => handleHover('tvshow')} onMouseOut={() => handleHover('tvshow')}>
            {/* button */}
        <div>
            <button className='text-white font-bold'>Movies</button>
        </div>
          {/* links  */}
          <div className="absolute bg-gray-200 divide-y-2 divide-slate-300 w-1/6 rounded" hidden={visiblity.tvVisible}>
          <LinkMaker name={'Popular'} url={'/main/movie/popular'} />
          <LinkMaker name={'Top Rated'} url={'/main/movie/top_rated'}  />
          <LinkMaker name={'Upcoming'} url={'/main/movie/upcoming'} />
          </div>
        </div>
    </div>
  )
}

export default Navbar


