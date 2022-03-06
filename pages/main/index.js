import React from 'react'
import Navbar from '../../components/navbar'
import {getSession} from 'next-auth/react'
import { useEffect } from 'react'
import { useState } from 'react'
import Search from '../../components/Search'
import Cards from '../../components/cards'


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
            <Cards posts={posts.results}/>
          </div>
          )
        } else {
          return (
            <h1>Sign In please!</h1>
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


      