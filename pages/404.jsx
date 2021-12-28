import React from 'react'
import { useRouter } from 'next/dist/client/router'

const AvailableSoon = () => {
 const router = useRouter();
 return (
  <div className="grid w-screen h-screen text-center text-white bg-gradient-to-t from-gray-700 to-gray-300 place-items-center ">
   <div className="flex flex-col ">
    <h2 className="text-4xl leading-relaxed tracking-wide">
     <div className="font-extrabold text-8xl animate-bounce">404</div> <br />You have entered null island.
    </h2>
    <button onClick={() => router.push('/')} className="p-3 m-3 text-blue-400 transition-transform duration-[.7s] transform rounded-xl mt-7 bg-gray-700 hover:scale-105 active:scale-95 text-lg">
     Go back
    </button>
   </div>
  </div>
 )
}

export default AvailableSoon
