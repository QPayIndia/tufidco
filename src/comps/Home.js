import React, { useState } from "react";
import "./Home.css";
import NavBar from "./navContainer.js";

import ChartComponent from "./Chart.js";
import Header from "./header.js";
import MobileNav from "./mobilenav.js";
import menu from "../assets/menu.svg";


const Home = ({ setvalue }) => {
  const cardData = [
    {
      name: "Corporations",
      value: 21,
      icon: "business",
      backgroundColor: "#DDEFE0",
    },
    {
      name: "Municipalities",
      value: 142 ,
      icon: "location_city",
      backgroundColor: "#F4ECDD",
    },
    {
      name: "Town Panchayats",
      value: 600,
      icon: "location_on",
      backgroundColor: "#EFDADA",
    },
    {
      name: "Total Funds",
      value: "Rs 12345.99 lacs",
      icon: "attach_money",
      backgroundColor: "#DEE0EF",
    },
    {
      name: "Total Projects",
      value: 62,
      icon: "work",
      backgroundColor: "#D0EEF6",
    },
    {
      name: "Total Loans",
      value: 40,
      icon: "payments",
      backgroundColor: "#ECD4F7",
    },
  ];

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
    <>


<div style={{display:"flex",flexDirection:"column",height:"100%"}}>
    <div className="header" style={{background:"rgb(27, 131, 129)",height:"70px"}}>
     
      <div style={{display:"flex",alignItems:"center"}}>
      <img className='mobilenavicon' style={{height:"25px",marginTop:"3px"}} onClick={handleNav} src={menu}></img>
      <h2 style={{marginLeft:"15px",color:"white",justifyContent:"center"}}>TUFIDCO</h2>
      </div>
      
      <div>
      <h3 style={{color:"white",justifyContent:"center"}}>ULB Name &nbsp; Amabasamudram</h3>
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

      <div className="homeContainer">
        <NavBar />
        <div className="dashboardContainer">
          <div className="cardContainer">
            {cardData.map((card, index) => (
              <div
                className="card"
                style={{ backgroundColor: card.backgroundColor }}
              >
                <span className="material-symbols-rounded">{card.icon}</span>
                <div className="cardContent">
                  <p>{card.name}</p>
                  <h4>{card.value}</h4>
                </div>
              </div>
            ))}
          </div>
          <ChartComponent />
        </div>
      </div>
    </>
  );
};

export default Home;