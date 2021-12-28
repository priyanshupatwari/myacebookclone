import { createContext } from "react";
// we are using slideContext to pass 
// -> const [showMenus, setShowMenus] = useState(false)
// state to different child components of MainLayout so that 
// when we click on the menus of slidemenu, the slidemenu slides back to left
// How ? well, by changing state of the 'showMenus' - true or false, we can  
// controll css class.
export const slideContext = createContext(null);