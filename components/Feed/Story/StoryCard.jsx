import Image from 'next/image';
export default function StoryCard({ src, profile }) {
 return (
  <div className="relative min-h-[77px] min-w-[77px] md:min-h-[110px] md:min-w-[110px] lg:min-w-[145px] lg:h-[16rem] mx-1.5 cursor-pointer transition hover:brightness-110">
   {/* profile pic */}
   <Image
    className='absolute z-50 rounded-full opacity-0 lg:opacity-100 top-10'
    src={profile}
    width={40}
    height={40}
    layout={'fixed'}
    objectFit="cover"
   />
   {/* story pic */}
   <Image
    className="object-cover rounded-full filter brightness-75 lg:rounded-3xl"
    src={src}
    layout="fill"
   />
  </div>
 )
}
