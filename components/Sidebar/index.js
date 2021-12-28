import { useSession } from "next-auth/client"

import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/outline";
import { CalendarIcon, ClockIcon, DesktopComputerIcon } from "@heroicons/react/solid";
import { SidebarRow } from './SidebarRow';

const Sidebar = () => {
 const [session, loading] = useSession();

 return (
  <div className="p-2 mt-5 space-y-6 ">
   <SidebarRow goto="" Icon={UserGroupIcon} title={`Groups`} /> 
   <SidebarRow goto="" Icon={ShoppingBagIcon} title={`Marketplace`} /> 
   <SidebarRow goto="" Icon={DesktopComputerIcon} title={`Watch`} />
   <SidebarRow goto="" Icon={CalendarIcon} title={`Events`} /> 
   <SidebarRow goto="" Icon={ClockIcon} title={`Memories`} /> 
   <SidebarRow goto="" Icon={ChevronDownIcon} title={`See More`} /> 
  </div> 
 )
}

export default Sidebar
