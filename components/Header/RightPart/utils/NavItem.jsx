import { useState } from 'react';
export default function NavItem({ notify, children, hideForSm, icon }) {
 const [open, setOpen] = useState(false);
 let rotate = false;
 if (open && children) { rotate = true } //rotate the icon 180deg only if it has children 
 return (
  // hideforSm is used to hide the right part icons expt. dropdown icon 
  <li
   className={`nav-item ${hideForSm ? "hidden xl:block" : null}`}
   onClick={() => notify && notify()}
  >
   <a href="#" className={`icon-button bg-gray-700 transition-transform ${rotate && "rotate-180"}`} onClick={() => setOpen(!open)}>
    {icon}
   </a>
   {/* here props.children is <DropdownMenu></DropdownMenu> */}
   {open && children}
  </li>
 );
}