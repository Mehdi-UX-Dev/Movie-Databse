import '../styles/globals.css'

// pages/_app.js
import { SessionProvider } from "next-auth/react"
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { SWRConfig } from 'swr'

    export default function App({
      Component,
        pageProps: { session, ...pageProps },
      }) {
        return (
            // * providing the fetcher function to all component 
              <SWRConfig value={{fetcher : (resource) => fetch(resource).then(res => res.json())}}>

                {/* //* redux store  */}
                <Provider store={store}>

                  {/* //* next-auth use Session  */}
              <SessionProvider session={session}>

                {/* //* main component  */}
              <Component {...pageProps} />
          
            </SessionProvider>
            </Provider>
            </SWRConfig>
                  )
                      }

