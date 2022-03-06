
import Image from 'next/image';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import useSWR from 'swr';
import spinner from '../../public/spinner.svg'

function Search() {

  
  const {data, error} = useSWR(`inputvalue`, fetcher) 
  console.log(data);

  const inputValue = useSelector((state) => state.submit.input)
  console.log(inputValue);

  return (
    <div className=' w-full h-10'>
      {inputValue}
   <Image height={150} width={120} src={spinner} alt='spinner' />
    </div>
  )
}


// fetcher function 
  const fetcher = async () => {
    const reponse = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_APIV3}&language=en-US&page=1&include_adult=false`)
      const data = await reponse.json();
      return data ;
  }

export default Search