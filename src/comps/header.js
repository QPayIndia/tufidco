import React,{useState} from 'react'
import "./Home.css";
import logo from "./../assets/tn-l.png";
import menu from "./../assets/menu.svg";

import userPicture from "./../assets/image.png";
import Sidebar from './navContainer';
import MobileNav from './mobilenav';
const Header = ({setvalue}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [shownNav, setMobileNav] = useState(false);

    const handleDropdownToggle = () => {
      setShowDropdown(!showDropdown);
    
    };

    const handleNav = () => {
      setMobileNav(!shownNav);
    
    };
  
    const handleLogout = () => {
      setvalue(false);
    };
  return (

    <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
    <div className="header" style={{background:"rgb(27, 131, 129)",height:"70px"}}>
     
      <div style={{display:"flex",alignItems:"center"}}>
      <img className='mobilenavicon' style={{height:"25px",marginTop:"3px"}} onClick={handleNav} src={menu}></img>
      <h2 style={{marginLeft:"15px",color:"white",justifyContent:"center"}}>TUFIDCO</h2>
      </div>
      
    <div className="userProfile" onClick={handleDropdownToggle}>
      <div className="userPicture">
       
      </div>
      <p style={{fontSize:"medium"}}>Admin</p>

      {showDropdown && (
        <div className="user_dropdown">
          <li>Profile</li>
          <li onClick={handleLogout}>Logout</li>
        </div>
      )}
    </div>
     </div>
     {shownNav && (
        <div>
        <MobileNav/>
       </div>
      )}
     
    </div>
   
   
  )
}

export default Header