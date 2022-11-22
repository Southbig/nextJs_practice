import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link'
import { GlobalContext } from "../pages/_app";

import { useRouter } from 'next/router'

const Nav = () => {

  const router = useRouter();

  const { ariaExpanded, changeHamberger, handleNavHamberger } = useContext(GlobalContext);

  const [marked, setMarked] = useState("block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white")
  const [unmarked, setunmarked] = useState("block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent")

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-2 py-2.5 rounded dark:bg-gray-900 w-px:900 m-1">
        <div className="flex flex-wrap items-center justify-between h-10">
          <div className='font-medium'><Link href="/">Movie Search</Link></div>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={ariaExpanded} onClick={handleNavHamberger}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className={`${changeHamberger}`} id="navbar-default" >
            <ul className="w-px:680 h-92 heiflex flex flex-col pt-3 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" >
              <Link href="/" className={`${router.pathname === '/' ? marked : unmarked}`}>Home</Link>
              <Link href="/about" className={`${router.pathname === '/about' ? marked : unmarked}`} > about</Link>
              <Link href="/card" className={`${router.pathname === '/card' ? marked : unmarked}`} > card</Link>
              <Link href="/movie" className={`${router.pathname === '/movie' ? marked : unmarked}`} > movie</Link>
            </ul>
          </div>
        </div >
      </nav >
    </div >
  );
};

export default Nav;