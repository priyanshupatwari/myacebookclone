import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { HiSearch } from "react-icons/hi";
import styles from "./index.module.scss";
import CenterPart from './CenterPart';
import RightPart from './RightPart';
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

import { slideContext } from '../slideContext'
import { useContext } from 'react'

const Header = () => {
  const [activeSearchBar, setActiveSearchBar] = useState(false);
  const { showMenus, setShowMenus } = useContext(slideContext)

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setActiveSearchBar);
  return (
    <div className="flex sticky top-0 z-[999] bg-white items-center p-2 lg:px-5 shadow-md max-h-[80px] ">

      {/* left - FacebookIcon*/}
      <div className='flex items-center flex-shrink'>
        {/* Lazy loading means the image loads after the website has loaded: Async */}
        <Image src='https://links.papareact.com/5me'
          width={40}
          height={40}
          layout='fixed'
        />
        {/* search bar */}
        <div ref={wrapperRef} onClick={() => setActiveSearchBar(true)} className={`searchBar  ${activeSearchBar && styles.activeSearchBar}`}>
          <input className='w-0 md:w-[8rem] lg:w-[15rem] items-center flex-shrink ml-2 bg-transparent outline-none transition-all duration-200 lg:duration-300' type="text" placeholder='Search Facebook' />
          <HiSearch className="w-8 h-8 p-2 text-white bg-blue-400 rounded-full cursor-pointer" />
        </div>
        {/* Sandwich Bar */}
        <div className='p-2 text-gray-600 md:hidden' onClick={() => setShowMenus && setShowMenus(!showMenus)}>
          {showMenus ? <ImCross className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </div>
      </div>

      {!activeSearchBar &&
        <div className="overflow-x-hidden flex items-center w-full">
          <CenterPart />
          <RightPart />
        </div>
      }
    </div>
  )
}
/**
* Hook that alerts clicks outside of the passed ref
*/
function useOutsideAlerter(ref, setActiveSearchBar) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        setActiveSearchBar(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    // when component unmounts
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default Header
