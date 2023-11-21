// Sidebar.js
import React, { useState } from "react";
import "./Home.css";
import VendorMaster from "./VendorMaster";
import { Link } from "react-router-dom";
const MobileNav = () => {
  const data = [
    {
      name: "Dashboard",
      icon: "speed",
      link:"/"
      
    },
    {
      name: "Masters",
      icon: "database",
      subNavs: [
        {name: "Scheme Master", link: "/schememaster"},
        {name: "Sector Master", link: "/sectormaster"},
        {name: "ULB Type Master", link: "/agencytypemaster"},
        {name: "ULB Master", link: "/ulbmaster"},
        {name: "ULB Scheme Bank Master", link: "/ulbschemebankmaster"},
       // {name: "ULB KYC", link: "/ulbkyc"},
       /* {name: "Bank Accounts", link: "/bankaccounts"},
        {name: "PAN Card Details", link: "/pancarddetails"},
        {name: "Project Master", link: "/projectmaster"},
        {name: "Fund Release", link: "/fundrelease"},
        //{name: "Release History", link: "/releasehistory"},
        {name: "Financial Progress", link: "/financialprogress"},
        {name: "Project Update", link: "/projectupdate"} */
       
      ],
    },
    {
      name: "Project",
      icon: "construction",
      subNavs: [
        {name: "Project Master", link: "/projectmaster"},
        {name: "Fund Release", link: "/fundrelease"},
      ],
    },
   
    {
      name: "Reports",
      icon: "monitoring",
      subNavs: [
        {name: "Project List", link: "/"},
        {name: "Sector wise Release", link: "/"},
        {name: "ULB wise Release", link: "/"},
        {name: "Project Progress", link: "/"},
        {name: "Sector wise Progress", link: "/"},
        {name: "ULB Release", link: "/"},
      ],
    },
    {
      name: "Old Data Import",
      icon: "upload_file",
      subNavs: [
        {name: "Project ", link: "/"},
        {name: "Physical Progress", link: "/"},
        {name: "Financial Progress", link: "/"}
        
      ],
    },


   
  ];
  const [selectedNavItem, setSelectedNavItem] = useState(0); // Set to 0 initially

  const handleNavItemClick = (index) => {
    setSelectedNavItem(selectedNavItem === index ? null : index);
  };

  return (
    <div className="mobilenav" style={{background:"#fff"}}>
      {data.map((item, index) => (
       
        <div
          key={index}
          className={`nav-item ${selectedNavItem === index ? "active-bx" : ""}`}
        >
          {selectedNavItem === index && <div className="active-box">. </div>}
        

          <div
            className="nav-item-header"
            onClick={() => handleNavItemClick(index)}
          >
              {!data.subNavs && <Link to={item.link} key={index}>
            <div className="alignMenu">
              <span
                className={`material-symbols-rounded ${
                  selectedNavItem === index ? "active" : ""
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`nav-text ${
                  selectedNavItem === index ? "active" : ""
                }`}
              >
                {item.name}
              </span>
            </div>
             </Link >}
            {item.subNavs && (
              <span
                className={`material-symbols-rounded toggle-button ${
                  selectedNavItem === index ? "active" : ""
                }`}
              >
                {selectedNavItem === index ? "expand_less" : "expand_more"}
              </span>
            )}

          </div>
         
          
          {selectedNavItem === index && item.subNavs && (
            <div className="subnav-container">
              {item.subNavs.map((item, subIndex) => (
                <Link to={item.link} key={subIndex}>
                  <div className="subnav-item">{item.name}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      
    </div>
  );
};
export default MobileNav;
