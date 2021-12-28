import InputBox from './InputBox';
import Stories from './Story';
import Posts from './Posts';
import { useSession } from 'next-auth/client'
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';

const Feed = () => {
  const [session] = useSession();
  const router = useRouter();
  return (
    <div className=" flex flex-col h-screen pt-6 overflow-y-auto pb-44 scrollbar-hide bg-gray-100">
      {!session &&
        <div className="w-full max-w-[26rem] flex justify-around  mx-auto mt-1 mb-8 rounded-3xl border-[1px] border-blue-200 shadow-inner text-md sm:text-lg bg-white">
          <span className="grid items-center font-medium text-gray-700 ">Do you want to post something ?</span>
          {/* <button onClick={() => router.push('/signin')} className="p-2 px-3 hover:bg-blue-500 rounded-3xl m-1 bg-blue-600 transition text-white cursor-pointer">Login</button> */}
          <button onClick={() => router.push('/signin')} className="p-2 px-3 hover:bg-blue-500 rounded-3xl m-1 bg-blue-600 transition text-white cursor-pointer">Login</button>

        </div>
      }

      {/* shadow-inner outline-none bg-gray-50 focus:bg-white */}
      <div className="w-full max-w-xl mx-auto">
        {/* Stories */}
        <Stories />
        {/* InputBox */}
        <InputBox />
        {/* Posts */}
        <Posts />
      </div>
    </div>
  )
}

export default Feed