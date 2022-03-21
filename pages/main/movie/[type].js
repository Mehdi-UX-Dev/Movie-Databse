      import Image from "next/image";
      import { useRouter } from "next/router"
import NavClickResultCard from "../../../components/NavClickResultCard";
      import spinner from '../../../public/spinner.svg'
         
            
  function Movie() {
        // router to fetch the desired value from the router query params // movies and popular 
        const router =  useRouter();
       
       
        if(router.query.type == undefined) return <div className="flex justify-center items-center h-screen"><Image src={spinner} className="" alt="spinner"/></div>
          return (
              <NavClickResultCard text={"Movies"} category={'movie'} value={router.query.type}/>
              )
                                                          }
            
            export default Movie
