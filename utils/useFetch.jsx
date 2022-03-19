        
       import useSWR from 'swr';

    function useFetch(name, url)  {
       
        
    
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
        );
        if (data !== undefined) return data; 
        return {}
    }

export default useFetch

// using custom hook for the returning of the data to the DataFetch

