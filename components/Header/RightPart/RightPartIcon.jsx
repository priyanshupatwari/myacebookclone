import BellIcon from './icons/bell.svg';
import MessengerIcon from './icons/messenger.svg';
import CaretIcon from './icons/caret.svg';
import PlusIcon from './icons/plus.svg';

import NavItem from "./utils/NavItem";
import DropdownMenu from "./utils/DropdownMenu";
import { toast } from 'react-toastify';

export default function RightPart() {
 const notify = () => toast.info("Work in progress!");
 return (
  <div className="inline-flex overflow-auto">
   <NavItem notify={notify} hideForSm={true} icon={<PlusIcon />} />
   <NavItem notify={notify} hideForSm={true} icon={<BellIcon />} />
   <NavItem notify={notify} hideForSm={true} icon={<MessengerIcon />} ></NavItem>
   
   <NavItem hideForSm={false} icon={<CaretIcon />}>
    <DropdownMenu></DropdownMenu>
   </NavItem>
  </div >
 )
}
