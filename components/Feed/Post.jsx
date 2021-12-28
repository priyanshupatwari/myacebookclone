import Image from 'next/image';
import { ThumbUpIcon, ChatIcon, ShareIcon } from "@heroicons/react/outline";
export default function Post({ name, message, timestamp, image, postImage }) {
  // ThumbUpIcon
  return (
    <div className="flex flex-col pb-5 max-w-[100vw]">
      <div className="p-5 mt-5 bg-white border-t-2 shadow-xl rounded-t-2xl">
        <div className="flex items-center">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt=""
          />
          <div className="ml-2">
            <p className="font-medium text-gray-700 ">{name}</p>
            <p className="text-xs text-gray-400">
              {timestamp ? (new Date(timestamp?.toDate())).toLocaleString() : "loading..."}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div >
      {postImage && (
        <div className="relative h-56 bg-white md:h-96">
          <Image
            src={postImage}
            objectFit="cover"
            layout="fill"
          />
        </div>
      )}
      {/* Footer of post*/}
      <div className="flex items-center justify-between text-gray-500 bg-white border-t shadow-md rounded-b-2xl">
        <div className="rounded-none inputIcon rounded-bl-2xl">
          <ThumbUpIcon className="h-4 sm:h-5" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="rounded-none inputIcon">
          <ChatIcon className="h-4 sm:h-5" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="rounded-none inputIcon rounded-br-2xl">
          <ShareIcon className="h-4 sm:h-5" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div >
  )
}
