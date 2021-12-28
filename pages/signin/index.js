import React from "react";
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { toast } from 'react-toastify';

export default function SignIn() {

 const [session] = useSession()
 const router = useRouter();
 if (session) { router.push('/'); return null; }
 return (
  <div className="grid w-full h-screen place-items-center ">

   <div className="max-w-[500px] w-4/5 bg-gray-50 p-6 text-gray-800 border-[4px]" >
    <h1 className="text-3xl font-semibold ">Sign up</h1>
    <br />
    <section className="flex flex-col h-[84px] justify-between ">
     <label htmlFor="email">Email</label>
     <input type="text" name="email" className="w-full h-12 px-5 transition-shadow bg-gray-100 rounded focus:outline-none focus:shadow focus:bg-gray-50 border-2 focus:border-[1px]" placeholder="yourname@email.com" />
    </section>
    <button className="w-full px-4 py-2 my-10 text-center text-white bg-blue-600 rounded-3xl "
     onClick={() => toast.error(`Email signup is currently unavailable.`)}
    >

     Sign up
    </button>

    <section className="flex flex-col space-y-3 text-white">
     <button onClick={() => signIn('facebook')} className="flex items-center p-1 bg-blue-600 shadow-md rounded-xl">
      <FaFacebook className="w-[44px] h-[44px]" /> <span className="flex items-center w-full pl-4 text-lg">Continue with Facebook</span>
     </button>
     <button onClick={() => signIn('google')} className="flex items-center p-1 bg-yellow-200 shadow-md rounded-xl">
      <FcGoogle className="w-[44px] h-[44px]" /> <span className="flex items-center w-full pl-4 text-lg text-gray-700">Continue with Google</span>
     </button>
     <button onClick={() => signIn('github')} className="flex items-center p-1 bg-gray-700 shadow-md rounded-xl">
      <FaGithub className="w-[44px] h-[44px]" /> <span className="flex items-center w-full pl-4 text-lg">Continue with Github</span>
     </button>
    </section>
   </div>
  </div >
 );
}