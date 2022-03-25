
import Image from 'next/image';
import { useRouter } from 'next/router';
import SearchCard from './searchCard'; 
import spinner from '../public/spinner.svg'


// router query param is not finished !!!!!!!!!!

function DataFetch() {

        // fetching the data from the router query params 
      const router = useRouter();

      // error handling for cientside 
    if( router.query.value == undefined) return( <div className="flex justify-center items-center h-screen"><Image src={spinner} className="" alt="spinner"/></div>)
    return (
          //making the mobile first toggle button and design then going for the larger screens 
            <SearchCard  hidingTheValue={false} text={'list of Movies and Tv shows for'} value={router.query.value} /> 
  )
}

export default DataFetch;


