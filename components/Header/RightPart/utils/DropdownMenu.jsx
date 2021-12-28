import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'

import CogIcon from '../icons/cog.svg';
import ArrowIcon from '../icons/arrow.svg';
import { AiOutlineBars } from "react-icons/ai";
import { BsShieldLockFill } from "react-icons/bs";
import { FaLanguage, FaUserCircle } from "react-icons/fa";
import { RiQuestionnaireFill, RiInboxArchiveFill, RiErrorWarningFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";

import { signOut, useSession } from 'next-auth/client';

import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/dist/client/router';

export default function DropdownMenu() {
 const [activeMenu, setActiveMenu] = useState('main');
 const [menuHeight, setMenuHeight] = useState(null);
 const [session] = useSession();
 const router = useRouter()
 const dropdownRef = useRef(null);

 useEffect(() => {
  setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
 }, [])

 function calcHeight(el) {
  setMenuHeight(el.offsetHeight);
 }

 function DropdownItem({ userImg, children, functions, goToMenu, leftIcon }) {
  return (
   /* Each item on the dropdown menu */
   < a href="#" className="menu-item hover:bg-gray-200 text-gray-800" onClick={() => { goToMenu && setActiveMenu(goToMenu); functions && functions() }}>
    {/* left icon */}

    {userImg ?
     (<Image
      className={'rounded-full cursor-pointer '}
      src={session.user.image}
      width="40"
      height='40'
      layout={'fixed'}
     />
     ) : <span className={"bg-gray-700 icon-button text-gray-50 "}>{leftIcon}</span>
    }

    {/* Name */}
    <span className={`px-2 ${userImg && "text-lg "}`}> {children}</span>
   </a >
  );
 }

 return (
  <div className="bg-white dropdown shadow-lg" style={{ height: menuHeight + 20 }} ref={dropdownRef}>
   {/* Main menu - Content: My Profile, Settings, Animals */}

   <CSSTransition
    in={activeMenu === 'main'}
    timeout={500}
    classNames="menu-primary"
    unmountOnExit
    onEnter={calcHeight}>
    <div className="w-[100%]">
     <DropdownItem userImg={session ? session.user.image : null} leftIcon={<FaUserCircle />}  >
      {session ? session.user.name : `My Profile`}
     </DropdownItem>

     <DropdownItem
      leftIcon={<CogIcon />}
      goToMenu="settings">
      Settings and privacy
     </DropdownItem>

     <DropdownItem
      leftIcon={<RiQuestionnaireFill />}
      goToMenu="Help and support">
      Help and support
     </DropdownItem>
     {session ?
      <DropdownItem
       functions={signOut}
       leftIcon={<IoMdLogOut />}>
       Log Out
      </DropdownItem> :
      <DropdownItem
       functions={() => router.push('/signin')}
       leftIcon = {< IoMdLogOut />}>
       Log in
      </DropdownItem>
     }

    </div>
   </CSSTransition>
   {/* Transition to this menu when clicked on Settings */}
   <CSSTransition
    in={activeMenu === 'settings'}
    timeout={500}
    classNames="menu-secondary"
    unmountOnExit
    onEnter={calcHeight}>
    <div className="w-[100%]">
     {/* go back */}
     <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
      <h2>Settings and privacy</h2>
     </DropdownItem>

     <DropdownItem leftIcon={<CogIcon />}>Settings</DropdownItem>
     <DropdownItem leftIcon={<AiOutlineBars />}>Activity log</DropdownItem>
     <DropdownItem leftIcon={<BsShieldLockFill />}>Privacy checkup</DropdownItem>
     <DropdownItem leftIcon={<FaLanguage />}>Language</DropdownItem>

    </div>
   </CSSTransition>
   {/* Transition to this menu when clicked on Animals */}
   <CSSTransition
    in={activeMenu === 'Help and support'}
    timeout={500}
    classNames="menu-secondary"
    unmountOnExit
    onEnter={calcHeight}>
    <div className="w-[100%]">

     <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
      <h2>Help and support</h2>
     </DropdownItem>

     <DropdownItem leftIcon={<RiInboxArchiveFill />}>Support inbox</DropdownItem>
     <DropdownItem leftIcon={<RiQuestionnaireFill />}>Help center</DropdownItem>
     <DropdownItem leftIcon={<RiErrorWarningFill />}>Report a problem</DropdownItem>

    </div>
   </CSSTransition>
  </div>
 );
}
