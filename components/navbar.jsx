import Image from 'next/image'
import Tmdb from '../public/Tmdb_short.svg'


function Navbar({posts}) {
    

  return (
    <div className=" flex  ">
        <div className="bg-darkBlue p-2 w-full">
        <div className='mx-8 flex items-center'>
        <Image alt="tmdb" src={Tmdb} className=""  width={130}/>
            <div className="  font-serif px-4 ">
                         
       
            </div>
        </div>

        </div>
    </div>
  )
}

export default Navbar


// change the fetch for genres to the the desired one 

  {/* <a className='px-2'>Movie</a>
          <a className='px-2'>Tv Shows</a>
          <a className='px-2'>People</a> */}


              {/* <select name="movie" id="movie" className='rounded-lg border-none bg-gray-300'  >
            <option value="" >Movie</option>
            <option value="popular">Popular</option>
            <option value="now_playing">Now Playing</option>
            <option value="upcoming">Upcoming</option>
            <option value="top_rated">Top Rated</option>
          </select> */}