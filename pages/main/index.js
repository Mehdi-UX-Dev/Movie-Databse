import React from 'react'
import Navbar from '../../utils/navbar'
import {useSession} from 'next-auth/react'
import Search from '../../components/Search'
import Cards from '../../components/cards'
import Image from 'next/image'
import spinner from '../../public/spinner.svg'
import MyModal from '../../utils/MyModal'
import useImage from '../../utils/useImage'

function Main({posts}) {
      const {status} = useSession();

        if(status == 'authenticated'){
          return (
            <div>
            <Navbar posts={posts.genres}/>
            <Search />
            <Cards posts={posts}  text={'Trending'} hidingTheValue={true} />
          </div>
          )
        }   else if(status == 'loading') {
          return (
            <div className='flex justify-center items-center mx-auto h-screen'>
            <Image height={150} width={120} src={spinner} alt='spinner' />
            </div>
          )
              }   else {
              // * making the pop up modal and giving a button to the signing index page 
              <MyModal />
                            } 
          }
        
        export default Main;

    export async function getStaticProps(context) {
          console.log(context);
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


      