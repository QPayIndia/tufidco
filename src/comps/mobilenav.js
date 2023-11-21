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
      icon: "settings",
      subNavs: [
        {name: "Scheme Master", link: "/schememaster"},
        {name: "Sector Master", link: "/sectormaster"},
        {name: "ULB Type Master", link: "/agencytypemaster"},
        {name: "ULB Master", link: "/ulbmaster"},
        {name: "ULB Scheme Bank Master", link: "/ulbschemebankmaster"},
        {name: "ULB KYC", link: "/ulbkyc"},
        {name: "Bank Accounts", link: "/bankaccounts"},
        {name: "PAN Card Details", link: "/pancarddetails"},

        {name: "Project Master", link: "/projectmaster"},
        {name: "Fund Release", link: "/fundrelease"},
        //{name: "Release History", link: "/releasehistory"},
        {name: "Financial Progress", link: "/financialprogress"},
        {name: "Project Update", link: "/projectupdate"}
       
      ],
    },
    {
      name: "Setup",
      icon: "settings",
      subNavs: [
        {name: "Master Data", link: "/masterdata"},
        {name: "SOR", link: "/sor"},
        {name: "Non SOR", link: "/nonsor"},
        {name: "Vendor master", link: "/vendormaster"}
        
       
      ],
    },
    {
      name: "Implementing agency details",
      icon: "badge",
      subNavs: [
        {name: "Municipal Corporation", link: "/municipalcorp"},
      {name: "Municipality", link: "/municipality"},
        {name: "Town Panchayat", link: "/townpanchayat"},
        {name: "Water Board", link: "/waterboard"}
       
      ],
    },
    {
      name: "Finance",
      icon: "finance",
      subNavs: [
        {name: "Scheme Opening Balance", link: "/schemeopeningbalance"},

        {name: "Scheme Money Received", link: "/schememoneyreceived"},

        {name: "Scheme Financial Position", link: "/schemefinancialposition"},

        {name: "Project Opening Balance", link: "/projectopeningbalance"},

        {name: "Project Fund Allocation", link: "/projectfundallocation"},

        {name: "Project Financial Position", link: "/projectfinancialposition"},
        {name: "Allocation and Expenditure", link: "/allocationandexpenditure"},
        {name: "Financial Progress", link: "/financeprogress"},
        {name: "Financial Progress List", link: "/financialprogresslist"},
        {name: "Budget Provision", link: "/budgetprovision"},
        {name: "Finance Report", link: "/financereport"}
        
       
      ],
    },
    {
      name: "Post Sanction",
      icon: "inventory",
      subNavs: [
        {name: "Pre Sanction", link: "/presanction"},
        {name: "Project Sanction", link: "/projectsanction"},
      
       
      ],
    },
    {
      name: "Administration Sanction",
      icon: "upload_file",
      subNavs: [
        {name: "File Upload", link: "/fileupload"},
        {name: "File List", link: "/filelist"}
      ]
    },
    {
      name: "Contractor",
      icon: "engineering",
      link:"/contractor"
      
    },
    {
      name: "Architect",
      icon: "architecture",
      link:"/architect"
      
    },
    {
      name: "Supplier",
      icon: "inventory",
      link:"/supplier"
      
    },
    {
      name: "Project",
      icon: "workspaces",
      link:"/projects"
      
    },
    {
      name: "Gantt Chart",
      icon: "analytics",
      link:"/ganttchart"
      
    },
    
    {
      name: "Physical Progress",
      icon: "clock_loader_10",
      subNavs: [
        {name: "Physical Progress Updation", link: "/projectupdation"},
        
      ],
    },
    {
      name: "Payment",
      icon: "currency_rupee",
      link:"/vendorpayment"
      
    },
    {
      name: "Invoice",
      icon: "article",
      link:"/invoice"
      
    },
    {
      name: "Demand",
      icon: "groups",
      link:"/demand"
      
    },
    {
      name: "Issue",
      icon: "report",
      link:"/issue"
      
    },
    {
      name: "Attendance",
      icon: "check_circle",
      link:"/attendance"
      
    },
    {
      name: "Circular",
      icon: "message",
      link:"/circular"
      
    },
    {
      name: "Format",
      icon: "bookmark",
      link:"/format"
      
    },
    {
      name: "Report",
      icon: "save",
      link:"/report"
      
    },
  
    {
      name: "User Profile",
      icon: "person",
      subNavs: [
        {name: "Users", link: "/users"},
        {name: "Log Out", link: "/logout"},
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
