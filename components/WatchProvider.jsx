import useFetch from "../utils/useFetch"

      
        
        const WatchProvider = () => {
      const {user} = useFetch('providers', `https://api.themoviedb.org/3/watch/providers/regions?api_key=${process.env.NEXT_PUBLIC_APIV3}&language=en-US`)
            console.log(user);
          
      return (
            <div>
                {/* search */}
                hi
            </div>
          )
        }
        
        export default WatchProvider