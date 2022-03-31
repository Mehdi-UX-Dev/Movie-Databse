        
       import useSWR from 'swr';

    function useFetch(name, url, refresh)  {
   
        const {data, error } = useSWR(name,async () =>  {
            // using the anonymous function 
            // fetching the data 
            const reponse = await fetch(url)
            // converting the json 
            const data = await reponse.json();
             
        return {
            user: data,
            isLoading: !error && !data,
            isError: error
        }
        },
        // * refresh interval in the swr hook for revalidatin the data if required 
            refresh
        );
        if (data !== undefined) return data; 
        return {}
    }

export default useFetch

// using custom hook for the returning of the data to the DataFetch

