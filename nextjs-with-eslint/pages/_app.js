import Link from 'next/link'
import { useState, createContext } from 'react'
import Nav from '../components/nav'

import '../styles/globals.css'

export const GlobalContext = createContext({})
export default function App({ Component, pageProps }) {
  const [ariaExpanded, setAriaExpanded] = useState('false')
  const [changeHamberger, setChangeHamberger] = useState('hidden w-full md:block md:w-auto')
  const handleNavHamberger = () => {
    if (ariaExpanded === 'false') {
      setAriaExpanded('true')
      setChangeHamberger('w-full md:block md:w-auto max-md:absolute top-10 z-10')
      return
    } else if (ariaExpanded === 'true') {
      setAriaExpanded('false')
      setChangeHamberger('hidden w-full md:block md:w-auto')
      return
    }
  }

  const value = {
    ariaExpanded,
    setAriaExpanded,
    changeHamberger,
    setChangeHamberger,
    handleNavHamberger
  };

  const handleClose = () => {
    if (ariaExpanded === 'true') {
      setAriaExpanded('false')
      setChangeHamberger('hidden w-full md:block md:w-auto')
      return
    }
  }
  return <>
    <GlobalContext.Provider value={value}>
      <Nav />
      <div onClick={handleClose} className='w-screen h-screen'>
        <Component {...pageProps} />
      </div>
    </GlobalContext.Provider>
  </>
}