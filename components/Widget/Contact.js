import Image from 'next/image';
import Link from 'next/link'
export default function Contact({chatwith, src, name }) {
 return (
  <Link href={chatwith}>
   <div className="relative flex items-center px-2 py-1 mb-2 space-x-3 transition cursor-pointer hover:bg-blue-200 rounded-3xl">
    <Image
     className="rounded-full"
     objectFit="cover"
     src={src}
     width={50}
     height={50}
     layout="fixed"
    />
    <p className="font-normal text-gray-800">{name}</p>
    <div className="absolute w-3 h-3 bg-blue-500 rounded-full bottom-2 left-7 animate-bounce"></div>
   </div>
  </Link>
 )
}
