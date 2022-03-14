        
       import useSWR from 'swr';

    function useFetch(name, url)  {
       
        
    
        const {data, error } = useSWR('movie',async () =>  {
            // using the anonymous function 
            // fetching the data 
            const reponse = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_APIV3}&language=en-US&query=${url}&page=1&include_adult=false`)
            // converting the json 
            const data = await reponse.json();
             
        return {
            user: data,
            isLoading: !error && !data,
            isError: error
        }
        },
        );
        if (data !== undefined) return data; 
        return {}
    }

export default useFetch

// using custom hook for the returning of the data to the DataFetch
