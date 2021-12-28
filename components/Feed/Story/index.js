import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useRef } from 'react';
import StoryData from "./StoryData";
import StoryCard from './StoryCard';

function StoriesRenderer() {
 const refs = useRef(null);
 const scroll = (direction) => {
  if (refs) {
   const divWidth = refs.current.getBoundingClientRect().width;
   if (direction === 'left') {
    refs.current.scrollLeft += divWidth / 2;
   } else if (direction === 'right') {
    refs.current.scrollLeft -= divWidth / 2;
   }
  }
 };

 return (
  <div>
   <div className="w-[350px] md:w-[450px] lg:w-[550px] max-w-[100vw] relative z-[0] mx-auto rounded-2xl ">

    <div className="absolute z-[99] left-[-15px] top-0 bottom-0 grid place-items-center bg-transparent">
     <button onClick={() => scroll('right')} className="h-8 w-8 md:h-10 md:w-10 bg-white rounded-full shadow-xl active:scale-110 transition">
      <ChevronLeftIcon className="text-gray-600" />
     </button>
    </div>
    {/* main container */}
    <div ref={refs} className="rounded-2xl flex w-full overflow-auto relative z-[0] scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
     {
      StoryData.map((story, index) => {
       return (
        <StoryCard
         key={index}
         src={story.src} profile={story.profile}
        />
       )
      })
     }
    </div>

    <div className="absolute z-[99] right-[-15px] top-0 bottom-0 grid place-items-center bg-transparent">
     <button onClick={() => scroll('left')} className="h-8 w-8 md:h-10 md:w-10 bg-white rounded-full shadow-xl active:scale-110 transition">
      <ChevronRightIcon className="text-gray-600" />
     </button>
    </div>

   </div>
  </div>
 )
}
//  scrollbar-hide  bg-transparent
export default StoriesRenderer;