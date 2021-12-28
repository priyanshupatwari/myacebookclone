import { useRouter } from 'next/dist/client/router'
import { FaUserCircle } from 'react-icons/fa'
const Chatwithfriend = () => {
 const router = useRouter();
 console.log('router', router);
 const friend = router.query.name
 return (
  <div className="flex flex-col items-center justify-center w-screen">
   {/* <!-- 🥳 Message --> */}
   <div className="flex flex-col w-[95vw] border-l border-r border-gray-400 md:w-[80vw] lg:w-[60vw]">
    {/* <!-- 👆 Top --> */}
    <div className="flex flex-row items-center justify-between flex-none h-20 p-5 border-b">

     <div className="flex flex-col space-y-1">
      <strong>{friend}</strong>
     </div>
     {/* <!-- ⭐⭐⭐⭐ --> */}
     <div className="flex flex-row items-center">
     </div>
    </div>
    {/* <!-- Real Message --> */}
    <div className="flex-auto p-5 space-y-4 overflow-y-auto">
     {/* <!-- ⏭️⏭️  --> */}
     <div className="flex flex-row space-x-2">
      {/* <!-- 🙋 --> */}
      {/* flex-none w-6 h-6 */}
      <FaUserCircle className="flex-none w-6 h-6" />
      {/* <!-- Text msg --> */}
      <div className="flex flex-col">
       <div className="max-w-[15rem] bg-gray-100 text-blue-500 font-semibold sm:max-w-sm p-5 break-words rounded-b-2xl rounded-tr-2xl">
        Hey buddy, how are you ?
       </div>
       <div className="text-sm text-gray-600">4hr ago</div>
      </div>
     </div>

     {/* <!-- ⏮️⏮️  --> */}
     <div className="flex flex-row-reverse space-x-2 space-x-reverse">
      {/* <!-- 🙋 --> */}
      <FaUserCircle className="flex-none w-6 h-6" />
      {/* <!-- Text Message --> */}
      <div className="flex flex-col">
       <div className="p-5 bg-blue-500 text-white font-semibold rounded max-w-[15rem] sm:max-w-sm break-words rounded-b-2xl rounded-tl-2xl">
        Hi {friend}, I am fine !
        How you doing ?
       </div>
       <div className="text-sm text-gray-600">5hr ago</div>
      </div>
     </div>
    </div>
    {/* <!-- Text Area --> */}
    <div className="flex-none p-4 pt-0 h-1/6">
     <textarea
      className="w-full h-full p-2 transition-all duration-300 border-2 border-gray-300 rounded-md shadow-lg outline-none focus:border-blue-700 hover:border-blue-500"
     >Hi</textarea>
    </div>
   </div>
   {/* <!--//🥳 --> */}
  </div>
 )
}

export default Chatwithfriend