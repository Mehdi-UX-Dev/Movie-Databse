

import { useRouter } from 'next/router';
import DataFetch from '../../../utils/DataFetch';

function Search() {
 const router =  useRouter()

return (
    <div className=''>
        <DataFetch inputData={router.query.value}/>
    </div>
  )


}





export default Search