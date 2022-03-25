import {useSelector} from 'react-redux'

function WatchProviderMedium() {
  //? providing the value from the redux store 
    const region = useSelector(state => state.country.value)
   
  return (
    <div>{region}</div>
  )
}

export default WatchProviderMedium