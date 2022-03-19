import Image from "next/image"
import vercel from '../public/vercel.svg'


function NavCard({...data}) {
// checking for the error handling in the images // if image not fetched then vercel svg will be shown 
let pic = data.poster_path !== undefined && data.poster_path !== null ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : vercel
return (
 <div  className="sm:w-56  md:hover:scale-105  overflow-hidden rounded-lg shadow-lg bg-gray-200 ">
    <Image src={pic} alt='pic' objectFit="cover"  height={100} width={100} layout="responsive" className="rounded-t-md" placeholder="blur" blurDataURL={pic}/>
  <p className="font-bold pl-3 pb-1 text-xl">{data.name || data.title}</p>
  {/* release date  */}
  <strong className="pr-1 pl-2 font-medium">Date:</strong>
  <span className="text-sm">{data.release_date || data.first_air_date}</span>
  {/* progress bar */}
  <p className="font-semibold pl-2 ">Popularity:<span className="font-bold pl-1">{data.vote_average}</span></p>
  
  {/* onverview */}
  <p className="truncate  pl-2"><span className="font-semibold pr-1">Overview:</span>{data.overview}</p>
 </div>
 )
  
}

export default NavCard

// moving it to the utils 


