import Image from "next/image";
import { useRouter } from "next/router"
import NavClickResultCard from "../../../components/NavClickResultCard";
import spinner from '../../../public/spinner.svg'   
        
        function Tv() {
         // router to fetch the desired value from the router query params // category and the types 
         const router =  useRouter();
            // checking the errors 
         if(router.query.type == undefined) return <div className="flex justify-center items-center h-screen"><Image src={spinner} className="" alt="spinner"/></div>
           return (
               <NavClickResultCard category={'tv'} value={router.query.type} text={'tv shows'}/>
               )
        }
        
        export default Tv;