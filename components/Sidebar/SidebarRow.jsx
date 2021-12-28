import Image from 'next/image';
import { useRouter } from 'next/dist/client/router'
export function SidebarRow({ goto, src, Icon, title }) {
  const router = useRouter();
  return (
    <div
      className="flex items-center px-3 py-2 my-1 text-gray-600 transition duration-200 border-[1px] border-transparent cursor-pointer rounded-xl hover:shadow-md active:shadow-none hover:text-gray-700 border-blue-300"
      onClick={() => goto ? router.push(goto) : router.push(`/features/${title}`)}
    >
      {src &&
        <Image
          className="p-4 rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      }

      {Icon &&
        <Icon className="w-5 h-5 text-blue-500 md:h-6 md:w-6 lg:w-7 lg:h-7" />
      }
      <p className="hidden ml-6 font-normal mr-7 md:inline-flex">{title}</p>
    </div>
  )
}