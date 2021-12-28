import Image from 'next/image';
import { useRouter } from 'next/dist/client/router'

import { useContext } from 'react'
import { slideContext } from '../slideContext'
export function SidebarRow({ user, goto, src, Icon, title }) {
  const router = useRouter();
  const { showMenus, setShowMenus } = useContext(slideContext)
  function show() {
    router.push(`/features/${title}`);
    setShowMenus(false);
  }
  return (
    <div
      className="flex items-center px-3 py-2 my-1 mx-2  transition cursor-pointer rounded-xl shadow-lg hover:shadow-xl text-gray-700 "
      onClick={() => !user && (goto ? router.push(goto) : show())}
    >
      {src &&
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      }

      {Icon &&
        <Icon className="w-5 h-5 text-blue-500 " />
      }
      <p className={`inline-flex ml-6 font-normal mr-7 ${user && 'font-bold text-gray-700'}`}>
        {title}
      </p>
    </div>
  )
}