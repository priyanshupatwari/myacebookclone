import React from 'react'
import { useRouter } from 'next/dist/client/router'

const AvailableSoon = () => {
 const router = useRouter();
 const title = router.query.title;
 return (
  <div className="grid w-screen h-screen text-center text-white bg-gradient-to-r from-indigo-500 to-blue-300 place-items-center ">
   <div className="flex flex-col ">
    <h2 className="text-4xl leading-relaxed tracking-wide"> <span className="font-extrabold">{title}<br /> </span> feature <br /> will be coming soon.</h2>
    <button onClick={() => router.back()} className="p-3 m-3 text-blue-500 transition-transform duration-[.7s] transform rounded-xl mt-7 bg-gray-50 hover:scale-105 active:scale-95 text-lg font-semibold">
     Go back
    </button>
   </div>
  </div>
 )
}

export default AvailableSoon
