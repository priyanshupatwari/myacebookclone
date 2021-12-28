import { useSession } from "next-auth/client"

import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/outline";
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UserIcon } from "@heroicons/react/solid";
import { SidebarRow } from './SidebarRow';

const Sidebar = () => {
 const [session, loading] = useSession();

 return (
  <div className="p-2 mt-5 space-y-6 ">
   {session ?
    (<SidebarRow user src={session.user.image} title={session.user.name} />) :
    (<SidebarRow user Icon={UserIcon} title={"My Profile"} />)
   }
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
