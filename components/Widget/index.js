import { SearchIcon } from "@heroicons/react/outline";
import { VideoCameraIcon, DotsHorizontalIcon } from '@heroicons/react/solid';
import Contact from './Contact';
export default function index() {
 const contacts = [
  { src: "https://links.papareact.com/f0p", name: "Jeff Bezos" },
  { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
  { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
  { src: "https://links.papareact.com/snf", name: "Mark Zuckerburg" },
  { src: "https://links.papareact.com/r57", name: "James Bond" },

 ]

 return (
  // Friends Section
  <div className="flex flex-col p-2 mt-5 w-60">
   <div className="flex items-center justify-between mb-5 text-gray-500">
    <h2 className="text-xl text-gray-600">Friends</h2>
    <div className="flex space-x-3">
     <VideoCameraIcon className="h-6 text-gray-700 cursor-pointer" />
     <SearchIcon className="h-6 text-gray-700 cursor-pointer" />
     <DotsHorizontalIcon className="h-6 text-gray-700 cursor-pointer" />
    </div>
   </div>
   {contacts.map((contact, indx) => {
    return <Contact chatwith={`/friends/chatwith?id=${indx}&name=${contact.name}`} key={indx} src={contact.src} name={contact.name} />
   })}
  </div>
 )
}
