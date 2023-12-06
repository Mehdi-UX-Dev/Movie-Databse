import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image';
import Tmdb from '../public/TMDB.svg'
import Link from 'next/link';
import { getSession, signIn, useSession } from "next-auth/react"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import spinner from '../public/spinner.svg'

// const gallery = ['iron-man','batman','poker','joker', 'jokerwall', 'jokercard', 'netflix' ]

function Index(){
 
  const router = useRouter();  
  const {status} =  useSession()
  
  useEffect(() => {
    // authenticating the server side 
    if(status == 'authenticated'){
            router.push('/main')
          }
        },[status,router]) 
        
        if(status !== 'authenticated') {
          return  <div  className="bg-[url('../public/Netflix.jpg')] bg-cover bg-center  grid content-center justify-items-center md:grid-cols-3 h-screen  md:h-screen w-auto">
        <div className='grid  justify-items-center md:flex  '>
        {/* Intro section  */}
        <div className='text-white text-lg md:self-center px-4   '>
          { <Image src={Tmdb} alt='tmdb' height={150} width={150} className="" /> }
          
          <h2 className=''>Welcome to The <span className='font-bold uppercase'>tmdb</span> Database API</h2>
          <span className=''>TMDB Database allows you to access all movies and all information related to them. </span>
        </div>
        {/* space  */}
        <div className='bg-gray-200 border-b-4  md:border-r-4 md:h-36 self-center w-40 md:w-0 mt-4'></div>
        </div>
        
        {/* sign in section  */}
        <div className=' w-7/12 mt-2'>
           
         <div className='bg-gray-200 rounded-lg grid justify-center h-48 py-2 '>
            <h4 className='text-gray-500 font-bold tracking-wider text-center uppercase'>sign in to continue</h4>
              {/* sign in options  */}
                {/* //** github element  */}
              <div className='btn group hover:bg-gray-700 rounded-full  border-gray-500  border-2 w-fit flex justify-center items-center'>
              <FontAwesomeIcon  icon={faGithub} className='group-hover:text-white  ' size='2x'/> 
              <Link href='/main'>
                <a className='font-bold text-gray-700  group-hover:text-white pl-2' onClick={e => {e.preventDefault()
                {signIn()}
              }}>Sign In with GitHub</a>
              </Link>
              </div>
              <p className='text-xl text-center font-serif'>-or-</p> 

                  {/* //* Google element  */}
              <div className='btn group hover:bg-gray-700 rounded-full  border-gray-500  border-2 w-fit flex justify-center items-center'>
              <FontAwesomeIcon  icon={faGoogle} className='group-hover:text-white  ' size='2x'/> 
              <Link href='/main'>
                <a className='font-bold text-gray-700  group-hover:text-white pl-2' onClick={e => {e.preventDefault()
                {signIn()}
                
              }}>Sign In with Google</a>
              </Link>
              </div>

                  
        </div>
        </div>
        {/*end of sign in section  */}
        </div>;
        }
        else {
          return  <div className="flex justify-center items-center h-screen"><Image src={spinner} className="" alt="spinner"/></div>
        }
        
        
      }
      
export default Index

// authenticating server side 
export async function getServerSideProps(context) {
  // getting the session here to check if the user is signed in 
  return {
    props: {
      session : await getSession(context),
    },
  }
}
  

