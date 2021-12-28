import React, { useState } from 'react'
import Header from './Header';
import Head from 'next/head';
import SlideMenu from '../components/SlideMenu'
import { slideContext } from "./slideContext";
import { ToastContainer } from 'react-toastify';

const MainLayout = ({ children }) => {
 const [showMenus, setShowMenus] = useState(false)
 return (
  <slideContext.Provider value={{ showMenus, setShowMenus }}>
   <Head>
    <title>Facebook-clone</title>
   </Head>
   <Header />
   {/* this div slides in from left in mobile */}
   <div className={`absolute bg-gray-50 z-10 h-[100vh] w-[100vw] transition-transform  ${showMenus ? "translate-x-[0%]" : "translate-x-[-100%]"} md:translate-x-[-100%]`}>
    <SlideMenu />
   </div>
   {children}
   {/* for using toast throughout the project */}
   <ToastContainer theme="colored" position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
  </slideContext.Provider>
 )
};

export default MainLayout