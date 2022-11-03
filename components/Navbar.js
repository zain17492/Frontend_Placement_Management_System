import React,{useState} from "react";
import Logo from "../assets/PlacementLogo.png";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import { navItems } from "./NavItems";
import  Dropdown from "./Dropdown";

function Navbar(){
  const [dropdown ,setDropdown] = useState(false);

  return(
    <>
    <nav className="navbar">
      <Link to ="/" className="leftSide ">
        <img src={Logo}/>
      </Link>
      <ul className="nav-items">
        {navItems.map(item=> {
          if(item.title==="Services"){
          return(
          <li 
          key={item.id} 
          className={item.cName}
          onMouseEnter={()=>setDropdown(true)}
          onMouseLeave= {()=>setDropdown(false)}>
            <Link to={item.path}>{item.title}</Link>
            {dropdown && <Dropdown/>}
          </li>
          );
          }
        return (
          <li key={item.id} className={item.cName}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        );
        
      })}
      </ul>
    </nav>
      </>
  )
}
export default Navbar;