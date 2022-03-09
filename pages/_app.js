import '../styles/globals.css'

// pages/_app.js
import { SessionProvider } from "next-auth/react"
// importing store 
import { store } from '../redux/store'
// importing provider
import { Provider } from 'react-redux'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return ( 
    <Provider store={store}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </Provider>
  )
}