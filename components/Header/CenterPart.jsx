import HeaderIcon from './HeaderIcon';
import {
 HiHome,
 HiUserGroup,
} from "react-icons/hi";
import {
 HiOutlineUsers,
 HiOutlineShoppingCart
} from "react-icons/hi";
import { BsFillCollectionPlayFill } from 'react-icons/bs';
import { useRouter } from "next/dist/client/router"
export default function CenterPart() {
 const router = useRouter();
 return (
  <div className={`flex flex-grow justify-center transition `}>
   <div className="flex justify-between w-[80%] sm:w-[70%]">
    {/* router.pathname == "/" ? "active" : "" */}
    <HeaderIcon gotoLink="/" active={router.pathname == "/" ? true : false} Icon={HiHome} title="Home" />
    <HeaderIcon gotoLink="/friends" active={router.pathname.startsWith("/friends") ? true : false} Icon={HiOutlineUsers} title="Friends" />
    <HeaderIcon gotoLink="" active={router.pathname == "none" ? true : false} Icon={BsFillCollectionPlayFill} title="Watch"/>
    <HeaderIcon gotoLink="" active={router.pathname == "none" ? true : false} Icon={HiOutlineShoppingCart} className="hidden sm:block"  title="Marketplace"/>
    <HeaderIcon gotoLink="" active={router.pathname == "none" ? true : false} Icon={HiUserGroup}  className="hidden sm:block" title="Groups"/>
   </div>
  </div>
 )
}
