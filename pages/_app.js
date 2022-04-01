import '../styles/globals.css'

// pages/_app.js
import { SessionProvider } from "next-auth/react"
// importing store 
import { store } from '../redux/store'
// importing provider
import { Provider } from 'react-redux'
import { SWRConfig } from 'swr'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return ( 
      <SWRConfig value={{fetcher : (resource) => fetch(resource).then(res => res.json())}}>
    <Provider store={store}>
       <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </Provider>
    </SWRConfig>
  )
}

// checking for the potential bugs in the tailwind and next js
