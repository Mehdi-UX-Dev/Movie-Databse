import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'
import Tmdb from '../public/Tmdb_short.svg'
import LinkMaker from './LinkMaker'
import vercel from '../public/vercel.svg'
import Link from 'next/link'

function Navbar() { 
        //  session checking 
      const session =  useSession();
      // making the state for the hovering 
      const [visiblity,setVisiblity] = useState({movieVisible: true , tvVisible: true, avatarVisible: true});
      // const [tvVisible , setTvVisible] = useState(true)
        // handling hover
      const handleHover = type => {
        if(type == 'movie') setVisiblity({...visiblity, movieVisible: !visiblity.movieVisible})
        if(type == 'tvshow') setVisiblity({...visiblity, tvVisible: !visiblity.tvVisible})
      }

     const handleClick = e => {
          setVisiblity({...visiblity,avatarVisible:!visiblity.avatarVisible})
     }
      
  return (
    <div className="flex bg-darkBlue p-2 w-full justify-between ">

       <div className='flex'>
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
                <div className="absolute  w-24 bg-gray-100 rounded divide-y-2 divide-slate-300" hidden={visiblity.movieVisible} >
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
                <div className="absolute bg-gray-200 divide-y-2 divide-slate-300 w-24 rounded" hidden={visiblity.tvVisible}>
                <LinkMaker name={'Popular'} url={'/main/movie/popular'} />
                <LinkMaker name={'Top Rated'} url={'/main/movie/top_rated'}  />
                <LinkMaker name={'Upcoming'} url={'/main/movie/upcoming'} />
                </div>
              </div>

          </div>

        {/* //? avatar and sign out section  */}
        <div className=' self-center relative  mr-4 '>
          <Image  src={session.data !== undefined ? session.data.user.image : vercel } alt="avatar" height={30} width={30} className="rounded-full" onClick={handleClick}/>
            <div className='bg-gray-300 absolute   rounded divide-y-2 divide-gray-500  font-bold  right-0' hidden={visiblity.avatarVisible}> 
              <span className='px-2'>{session.data !== undefined ? session.data.user.name : 'waiting' }</span>
              <span className='px-2'>{session.data !== undefined ? session.data.user.email : 'waiting' }</span>
              <Link href={'/api/auth/signout'}><a className='block text-center bg-darkBlue hover:bg-gray-700 text-white rounded mt-'>Log out</a></Link>
            </div>
        </div>

    </div>
  )
}

export default Navbar


