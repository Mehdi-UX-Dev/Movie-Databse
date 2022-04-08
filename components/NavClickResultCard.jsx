
          //** */ for showing the results of the navbar buttons
          import { Form } from "./Form";
          import Navbar from "../utils/navbar";
          import NavCard from "../utils/CardMaker";
          import WatchProvider from "./WatchProvider";
          import { useState } from "react";
          import useSWR  from 'swr'
          import MyModal from "../utils/MyModal";
          import { useSession } from "next-auth/react";
          import Image from "next/image";
          import loading_dot from '../public/loading_dot.svg'
        

        function NavClickResultCard({category,value,text}) {
          //* securing pages client side 
          const {status} = useSession()
         
          //? adding the state for the page and setPageCount for the api 
              const [page,setPageCount] = useState(1)
              // swr hook 
               const {data,error} = useSWR(`https://api.themoviedb.org/3/${category}/${value}?api_key=${process.env.NEXT_PUBLIC_APIV3}&language=en-US&page=${page}`)
           
            // * handleClick function 
           const handleClick = e => {
            setPageCount(e.target.value)
          }

            //  if(data == undefined && error || status == 'unauthenticated' ) return <MyModal error={error.toString()} status={status}/>     
            if(data == undefined) return (<div className="grid h-screen content-center" ><Image src={loading_dot} alt={'loading'} height={200} width={200} layout={''}/></div>)
          return (<div>
            {/* navbar section */}
              <Navbar/>

              {/* section  */}
              <div className="grid grid-cols-3 mt-4 ">
            {/* search section and provider section  */}
                <div className="col-span-1 text-center relative">
                  <h1 className=" uppercase text-2xl font-semibold ">{value} {text}</h1>
                  <div className="fixed left-0 w-1/3">
                  {/* component which contains both search and provider data  */}
                    <Form/>
                    <WatchProvider param={text}/>
                    </div>
                  </div>
            {/* cards section showing the results in the card */}
               <div className="flex flex-wrap justify-center col-span-2 space-x-3 space-y-4 pt-12 pr-3">
              {data.results.map(data => (
                <NavCard  key={data.id} {...data}/>
              )
              )}
              <div className="flex w-full justify-center py-2 h-12 space-x-4 text-white">
                  {/*  //* button for changing page  */}
                  <button className={`text-2xl ${page == 1 ? 'bg-darkBlue' : 'bg-lightBlue'} w-1/12 rounded hover:bg-darkBlue`} value={1} onClick={handleClick} >1</button>
                  <button className={`text-2xl ${page == 2 ? 'bg-darkBlue' : 'bg-lightBlue'} w-1/12 rounded hover:bg-darkBlue`} value={2}  onClick={handleClick} >2</button>\
                  <button className={`text-2xl ${page == 3 ? 'bg-darkBlue' : 'bg-lightBlue'} w-1/12 rounded hover:bg-darkBlue`} value={3}  onClick={handleClick} >3</button>\
                  <button className={`text-2xl ${page == 4 ? 'bg-darkBlue' : 'bg-lightBlue'} w-1/12 rounded hover:bg-darkBlue`} value={4}  onClick={handleClick} >4</button>\
              </div>
              </div>
              </div>
              </div>
          )
        }
        
        export default NavClickResultCard;

      
        // moving it to the utils