import { useState } from 'react'


function MyRadioGroup({filter}) {
      // logic 
      // 1 using a state to check wether a button is checked or not by comparing the value to the state 
      const [check, setCheck] =  useState('multi')
      
      // 2 returning the desired value to the parent component for the required filtering 
      const handleChange = e => {
        // assigning the update value to the state storage 
          setCheck(e.target.value)
        //  passing it down the tree to the searchCard component
           filter(e.target.value)
        }


  return(
    <div className='border-2 rounded-lg mx-2 w-full  flex-col border-darkBlue '>
      {/* header part  */}
      <div className='text-center border-2 font-bold font-serif text-white bg-gradient-to-r from-darkBlue to-lightBlue rounded-lg '>Select:</div>
      {/* buttons part  */}
      <div className='pl-1'>
      <input type="radio" name="select" id="movie" className='rounded-full text-pink-500 focus:ring-pink-500' value='movie' onChange={handleChange} checked={check === 'movie'}/>
      <label htmlFor="movie" className='pl-1'>Movie</label>
      </div>
      <div className='pl-1'>
      <input type="radio" name="select" id="tv" className='rounded-full' value='tv' onChange={handleChange} checked={check === 'tv'}/>
      <label htmlFor="movie" className='pl-1'>Tv Shows</label>
      </div>
      <div className='pl-1 '>
      <input type="radio" name="select" id="movie" className='rounded-full ' value='multi' onChange={handleChange} checked={check === 'multi'} />
      <label htmlFor="movie"  className='pl-1'>Movie & Tv shows</label>
      </div>
    </div>
  )
}

export default MyRadioGroup
