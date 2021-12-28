import Image from 'next/image'
import IconPart from "./RightPartIcon";
import React from 'react';
import { useSession } from 'next-auth/client';

export default function RightPart() {
 const [session] = useSession();
 return (
  <div className={`flex items-center justify-end sm:space-x-2 transition`}>
   {/* Profile pic */}
   <div className=" items-center p-2 rounded-full cursor-pointer hidden sm:flex">
    {session &&
     (<Image
      className={'rounded-full cursor-pointer '}
      src={session.user.image}
      width="40"
      height='40'
      layout={'fixed'}
     />)
    }
   </div>
   <p className="hidden max-w-[190px] pr-3 overflow-hidden font-semibold text-gray-800 md:block whitespace-nowrap">
    {session && session.user.name}
   </p>
   {/* right menus */}
   <IconPart />
  </div>
 )
}