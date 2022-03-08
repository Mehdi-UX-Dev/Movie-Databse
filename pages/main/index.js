import React from 'react'
import Navbar from '../../components/navbar'
import {getSession} from 'next-auth/react'
import { useEffect } from 'react'
import { useState } from 'react'
import Search from '../../components/Search'
import Cards from '../../components/cards'
import Image from 'next/image'
import spinner from '../../public/spinner.svg'

function Main({posts}) {

  const [data, setData] = useState(false)
  useEffect(() => {
    async function fetch() {
      const session = await getSession();
       if(session){
          setData(true)
       } 
    }
    fetch()
}, [])

        if(data){
          return (
            <div>
            <Navbar posts={posts.genres}/>
            <Search />
            <Cards posts={posts.results}  text={'Trending'}/>
          </div>
          )
        } else {
    // make a timeout function for the below spinner and set a state for the timeout about of 3 sec
          return (
            <div className='flex justify-center items-center mx-auto h-screen'>
            <Image height={150} width={120} src={spinner} alt='spinner' />
            </div>
          )
        }     
        }
        
        export default Main;

    export async function getStaticProps(context) {
          const api = process.env.NEXT_PUBLIC_APIV3
          const response = await fetch(`
          https://api.themoviedb.org/3/trending/all/day?api_key=${api}&language=en-US`)
          const posts = await response.json();
          return {
            props: {
              posts,
            },
          }
        }


      