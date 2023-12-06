import { useRouter } from 'next/router'
import MediaDetail from '../../../../components/MediaDetail';


const Media = () => {
   const router =  useRouter();
   router.query['media'] = router.query['media][id']
   delete router.query['media][id']
   const {query:{id, media}} = router
 
   
    if(media == undefined || id == undefined) return <div className='flex justify-center items-center h-screen text-3xl font-bold'>Loading...</div>
    return  <MediaDetail id={id} media={media} /> 
    }

export default Media
