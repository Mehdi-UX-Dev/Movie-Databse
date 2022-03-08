
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from "next/router";
import {submitValue} from '../redux/submitSlice'       
  function Search({input}) {
      // const inputValue = useSelector(state => state.submit.input)


      // creating the selector hook 
      const dispatch = useDispatch();

          // defining react router 
          const router =  useRouter()

            
    // defining the value state 
       const [value , setValue] = useState('')

    // submit handler function 
      const submitHandler = e => {
        e.preventDefault();
        // givin the value to the redux store 
        dispatch(submitValue(value))
        router.push(`/main/search/${value}`)
        // setValue('')
      }

      // handleChange function 
      const handleChange = e => {
        setValue(e.target.value)
      }


      return (
        <div className="h-1/3">
        <div className=" bg-[url('../public/Batman.jpg')] bg-cover h-96 flex items-center flex-wrap ">
          {/* heading  */}
          <div className="mx-8 text-white font-mono">
         <h1 className='text-6xl  font-bold '>Welcome</h1>
          <h3 className='text-2xl font-semibold '>Millions of movies, TV shows and people to discover. Explore now!</h3>
          </div>
            {/* form  */}  
              <div className="w-full mx-8 ">
                <form onSubmit={submitHandler}>
                  <input value={value} onChange={handleChange} type="text" name="search" id="search" className='w-10/12 md:w-11/12  border-2  rounded-l-lg  focus:border-gray-600 focus:ring-gray-600 border-r-0 shadow-sm' placeholder='search for movies and people...' required />
                      <button className='font-bold bg-gradient-to-r from-darkBlue via-lightBlue to-lightgreen text-white  w-fit border-2 h-11  border-none rounded-r-md '>Search</button>                
                </form>
              </div>
        </div>

        </div>
      )
    }
    
    export default Search;



    
        
        //   router.push('/search')