import React from 'react'
import Navbar from '../../utils/navbar'
import {useSession} from 'next-auth/react'
import Search from '../../components/Search'
import Cards from '../../components/cards'
import Image from 'next/image'
import spinner from '../../public/spinner.svg'
import MyModal from '../../utils/MyModal'


  function Main({posts}) {
       
      const {status} = useSession();
     
        if(status == 'authenticated' & typeof posts == 'object' ){
          return (
            <div>
            <Navbar/>
            <Search />
            <Cards posts={posts}  text={'Trending'} hidingTheValue={true} />
            </div>
          )
        }   else if(status == 'loading') {
          return (
            <div className='flex justify-center items-center mx-auto h-screen'>
            <Image height={150} width={120} src={spinner} alt='spinner'/>
            </div>
          )
              }   else if(typeof posts == 'string' || status == 'unauthenticated') {
                  // * making the pop up modal and giving a button to the signing index page 
                    return  <MyModal error={posts} status={status}/>
                            } 
          }
        
        export default Main;

    export async function getStaticProps() {
      let posts = null;
          try{
        const api = process.env.NEXT_PUBLIC_APIV3
          const response = await fetch(`
          https://api.themoviedb.org/3/trending/all/day?api_key=${api}&language=en-US`)
           posts = await response.json();
          } catch (err){
            posts = err.code
          }
        
          return {
            props: {
              posts,
            },
          }
        }

        // done a little bit here but the testing section goes the long way so start fron the static and then continue to the pages like cards.jsx
        

      