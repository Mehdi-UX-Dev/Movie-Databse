 
 function Search() {
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
                <form >
                  <input type="text" name="search" id="search" className='w-10/12 md:w-11/12 rounded-xl border-2 border-gray-400  focus:border-gray-600 focus:ring-gray-600 shadow-sm' placeholder='search for movies and people...' required />
                      <button className='font-bold bg-gradient-to-r from-darkBlue via-lightBlue to-lightgreen text-white rounded-lg w-fit border-2 h-10 '>Search</button>                
                </form>
              </div>
        </div>

        </div>
      )
    }
    
    export default Search

