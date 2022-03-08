
import useSWR from 'swr';
import Cards from '../components/cards';


function DataFetch({inputData}) {
   console.log(inputData);
    const {data, error} = useSWR(`movie and tv shows`,async () =>  {
      // using the anonymous function 
      // fetching the data 
      const reponse = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_APIV3}&language=en-US&query=${inputData}&page=1&include_adult=false`)
      // converting the json 
      const data = await reponse.json();
    

      if(data){
          return data.results
        }else {
          return error.message
        }
    }) 
      console.log(data);




  return (
          //making the mobile first toggle button and design then going for the larger screens 
        <div >
            {/* <Cards posts={data} text={'list of Movies and Tv shows for '} value={inputData}/>  */}
        </div>
  )
}

export default DataFetch

