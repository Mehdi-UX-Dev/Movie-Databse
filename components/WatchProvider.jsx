import WatchProviderRegionMaker from "./regionsMaker";
  import Image from 'next/image'
  import loading_dot from '../public/loading_dot.svg'
import WatchProviderMedium from "./watchProviderMedium";
import useSWR from "swr";
        
        const WatchProvider = ({param}) => {
         
      const {data} = useSWR(`https://api.themoviedb.org/3/watch/providers/regions?api_key=${process.env.NEXT_PUBLIC_APIV3}&language=en-US`)
         if(data === undefined) return (<div><Image src={loading_dot} alt={'loading'}/></div>)   
      return (
            <div className="border-2 border-darkBlue rounded w-11/12 mx-auto ">
              <form >
                {/* search */}
                <h3 className="capitalize font-semibold ">{'where to watch'}</h3>
                 <WatchProviderRegionMaker {...data}/>
                 {/* <div className="border-b-2 w-11/12 mx-auto border-gray-400 mt-1"></div> */}
                 <WatchProviderMedium param={param} />
                </form>
            </div>
          )
        }
        
        export default WatchProvider