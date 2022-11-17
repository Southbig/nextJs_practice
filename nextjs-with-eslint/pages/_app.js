import Link from 'next/link'
import Nav from '../components/nav'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Nav />
    <Component {...pageProps} />
  </>
}