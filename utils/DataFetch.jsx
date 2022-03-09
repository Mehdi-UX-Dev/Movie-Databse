
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import SearchCard from '../components/searchCard'; 
import spinner from '../public/spinner.svg'


function DataFetch() {
    // taking the the inputValue from the locatStorage due to the preistency 
    const checkout = typeof window !== 'undefined' ? localStorage.getItem('inputValue') : null

    // fetching the data from the router query params 
      const router = useRouter()
     
    const {data, error } = useSWR(`movie and tv shows`,async () =>  {
      // using the anonymous function 
      // fetching the data 
      const reponse = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_APIV3}&language=en-US&query=${checkout}&page=1&include_adult=false`)
      // converting the json 
      const data = await reponse.json();
    
    return {
      user: data,
      isLoading: !error && !data,
      isError: error
    }
    }) 
  // error handling for cientside 
    if( data === undefined) return( <div className="flex justify-center items-center h-screen"><Image src={spinner} className="" alt="spinner"/></div>)
  return (
          //making the mobile first toggle button and design then going for the larger screens 
        <div >
            <SearchCard posts={data.user.results} hidingTheValue={false} text={'list of Movies and Tv shows for'} value={router.query.value} /> 
        </div>
  )
}

export default DataFetch

