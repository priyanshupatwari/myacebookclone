import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

const HeaderIcon = ({ className, Icon, active, gotoLink, title }) => {
 const router = useRouter();

 return (
  <div className={`${className} ${active ? 'text-blue-600' : 'text-grey-700'} headerCenteralIcons `}
   onClick={() => gotoLink ? router.push(gotoLink) : router.push(`/features/${title}`)}
  >
   <Icon className={`w-5 h-5 mx-auto`} />
  </div>
 )
}
//
export default HeaderIcon
