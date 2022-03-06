import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook , faTwitter, faGithub, faGoogle} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image';
import Tmdb from '../public/TMDB.svg'
import Link from 'next/link';
import { getSession, signIn, useSession } from "next-auth/react"
import { useEffect, useState } from 'react';
import {  useRouter } from 'next/router';

function Index() {

    const router = useRouter();  
     const [loading, setLoading]=useState(true);
     const {data : session } = useSession()
     console.log(session);
     useEffect(() => {
          // authenticating the server side 
          if(session){
            router.push('/main')
            setLoading(false)
          }
        },[loading]) 
        
        if(loading){
       return  <div className=" bg-[url('../public/Batman.jpg')] bg-cover bg-center  grid content-center justify-items-center md:grid-cols-3 h-screen  md:h-screen w-auto  ">
        <div className='grid  justify-items-center md:flex  '>
        {/* Intro section  */}
        <div className='text-white text-lg md:self-center px-4   '>
          { <Image src={Tmdb} alt='tmdb' height={150} width={150} className="" /> }
          
          <h2 className=''>Welcome to The <span className='font-bold uppercase'>tmdb</span> Database API</h2>
          <span className=''>TMDB Database allows you to access all movies and all information related to them. </span>
        </div>
        {/* space  */}
        <div className='bg-white border-b-4  md:border-r-4 md:h-36 self-center w-40 md:w-0 mt-4  '></div>
        </div>
        
        {/* sign in section  */}
        <div className='  md:ml-12   w-5/6 md:w-auto  md:justify-end mt-2 mb-4'>
            {/* form element */}
         <div className='bg-gray-200 rounded-lg '>
            <h4 className='text-gray-500 font-bold tracking-wider text-center uppercase'>Login In form </h4>
          <form className='w-full px-2 h-full '>
            <input className='rounded-lg border-2  border-gray-400 w-full  my-2  focus:border-gray-600 focus:ring-gray-600 shadow-sm ' placeholder='Username' type="text" required />
            <input className='rounded-lg border-2 border-gray-400 w-full  my-2 focus:border-gray-600 focus:ring-gray-600' placeholder='Password' type="text" required/>
            <input className='rounded-lg border-2 border-gray-400 w-full   focus:border-gray-600 focus:ring-gray-600' placeholder='email' type="email" required/>
             {/* check box  */}
             <div className='flex mt-2 items-center '>
               <input type="checkbox" required className='mr-2 rounded border-gray-500 focus:ring-gray-600 text-gray-500 '/>
                <p className='text-sm text-gray-900'> I accept all terms and conditions</p>
               </div> 
            <button className='uppercase font-bold w-full border-2 border-gray-500 rounded-full mt-2 mb-3 hover:bg-gray-700 hover:text-white hover:cursor-pointer'>log in </button>
              </form>
        
                       <p className='text-xl text-center font-serif'>-or-</p> 
              {/* sign in options  */}
          <div className='grid grid-cols-1 justify-items-center   '>
                {/* github element  */}
              <div className='btn group hover:bg-gray-700 rounded-full  border-gray-500  border-2 w-fit flex justify-center items-center'>
              <FontAwesomeIcon  icon={faGithub} className='group-hover:text-white  ' size='2x'/> 
              <Link href='/main'>
                <a className='font-bold text-gray-700  group-hover:text-white pl-2' onClick={e => {e.preventDefault()
                { loading&&signIn()}
                // { !loading&& router.push('/main') }
                }}>Sign In with GitHub</a>
              </Link>
              </div>
                    </div>
        </div>
        </div>
        {/*end of sign in section  */}
        </div>;}else 
        return null;

}

export default Index

// authenticating server side 
export async function getServerSideProps(context) {
  // getting the session here to check if the user is signed in 
  return {
    props: {
      session: await getSession(context),
    },
  }
}
  

